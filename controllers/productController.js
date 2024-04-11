const { createClient } = require("@supabase/supabase-js");
const { Product, Category } = require("../models");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll({ include: { model: Category }, order: [["id", "ASC"]] });
  return res.json(products);
}

// Display the specified resource.
async function show(req, res) {
  const id = req.params.id;
  const oneProduct = await Product.findByPk(id, { include: Category });

  return res.json(oneProduct);
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    console.log({ fields });
    console.log({ files });

    await Product.create({
      name: fields.name,
      image: "/tmp_images/" + files.productImage.newFilename,
      description: fields.name,
      price: fields.price,
      stock: fields.stock,
      categoryId: fields.categoryId,
    });

    const ext = path.extname(files.productImage.filepath);
    const newFileName = `image_${Date.now()}${ext}}`;

    const { data, error } = await supabase.storage
      .from("tmp_images") /* Nombre del Bucket */
      .upload(files.productImage.newFilename, fs.createReadStream(files.productImage.filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.productImage.mimetype,
        duplex: "half",
      });
    res.send("New Product was created");
  });
}

// Update the specified resource in storage.
async function update(req, res) {
  const productId = req.params.id;
  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      console.log({ fields });
      console.log({ files });

      const updatedProduct = await Product.update(
        {
          name: fields.name,
          image: "/tmp_images/" + files.productImage.newFilename,
          description: fields.description,
          price: fields.price,
          stock: fields.stock,
          categoryId: fields.categoryId,
        },
        { where: { id: productId } },
      );

      const ext = path.extname(files.productImage.filepath);
      const newFileName = `image_${Date.now()}${ext}}`;

      const { data, error } = await supabase.storage
        .from("tmp_images") /* Nombre del Bucket */
        .upload(files.productImage.newFilename, fs.createReadStream(files.productImage.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.productImage.mimetype,
          duplex: "half",
        });
      res.send("New Product was created");
    });

    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// async function update(req, res) {
//   const productId = req.params.id;
//   try {
//     const form = formidable({
//       multiples: true,
//       keepExtensions: true,
//     });

//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         return res.status(400).json({ error: "File upload error" });
//       }

//       console.log({ fields });
//       console.log({ files });

//       const ext = path.extname(files.productImage.name);
//       const newFileName = `image_${Date.now()}${ext}`;
//       const imagePath = `/tmp_images/${newFileName}`;

//       // Perform database update
//       const updatedProduct = await Product.update(
//         {
//           name: fields.name,
//           image: imagePath, // Assuming this is the correct path to store the image
//           description: fields.description,
//           price: fields.price,
//           stock: fields.stock,
//           categoryId: fields.categoryId,
//         },
//         { where: { id: productId } }
//       );

//       // Upload the file to Supabase storage
//       const { data, error } = await supabase.storage
//         .from("tmp_images")
//         .upload(newFileName, fs.createReadStream(files.productImage.path), {
//           cacheControl: "3600",
//           upsert: false,
//           contentType: files.productImage.type,
//           duplex: "half",
//         });

//       if (error) {
//         console.error("Error uploading image to Supabase:", error);
//         return res.status(500).json({ error: "Error uploading image" });
//       }

//       res.status(200).json({ message: "Product updated successfully" });
//     });
//   } catch (error) {
//     console.error("Error updating product:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }

// Remove the specified resource from storage.
async function destroy(req, res) {
  const { id } = req.params;

  try {
    // Find the product by ID
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Delete the product
    await product.destroy();

    // Respond with success message
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

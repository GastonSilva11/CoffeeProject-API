/**
 * Este archivo se puede usar como referencia para crear el controlador de
 * cualquier entidad del sistema.
 *
 * Por ejemplo, si se necesita crear un controlador para la entidad `Student`,
 * se sugiere hacer Copy & Paste de este archivo y nombrarlo como
 * `studentController.js`.
 *
 * No es necesario renombrar los métodos. A priori, la idea es que todos los
 * controladores tengan estos 7 métodos: index, show, create, store, edit,
 * update y destroy.
 *
 * Nota: en el caso de estar creando una API, los métodos `create` y `edit`
 * no serían necesarios ya que los mismos se usan en proyecto con server-side
 * rendering para mostrar los formularios de crear y editar, respectivamente.
 *
 * Por lo tanto, al crear una API, los únicos métodos que serían necesarios
 * son: index, show, store, update y destroy.
 */

const { createClient } = require("@supabase/supabase-js");
const { Product, Category } = require("../models");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll({ include: { model: Category } });
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
      image: files.productImage.newFilename,
      description: fields.name,
      price: fields.price,
      stock: fields.stock,
      categoryId: fields.categoryId,
    });

    const ext = path.extname(files.productImage.filepath);
    const newFileName = `image_${Date.now()}${ext}}`;

    const { data, error } = await supabase.storage
      .from("product_images") /* Nombre del Bucket */
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

  const { name, description, price, stock, categoryId } = req.body;
  try {
    // Validate the incoming data (e.g., check for required fields, data types)

    // Update the product in the database
    const updatedProduct = await Product.update(
      {
        name,
        description,
        price,
        stock,
        categoryId,
      },
      { where: { id: productId } },
    );

    if (updatedProduct[0] === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Respond with success message
    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

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

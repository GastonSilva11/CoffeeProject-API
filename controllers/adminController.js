const { Admin } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const admins = await Admin.findAll({
    attributes: { exclude: ["password"] },
  });
  return res.json(admins);
}

// Display the specified resource.
async function show(req, res) {
  const id = req.params.id;

  const admin = await Admin.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  return res.json(admin);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const { firstname, lastname, email, password } = req.body;
  console.log(req.body);

  try {
    // Create the user in the database
    const newAdmin = await Admin.create({
      firstname,
      lastname,
      email,
      password,
    });

    // Respond with the newly created user
    return res.status(201).json(newAdmin);
  } catch (error) {
    console.error("Error creating admin:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  const adminId = req.params.id;

  const { firstname, lastname, email } = req.body;
  try {
    // Validate the incoming data (e.g., check for required fields, data types)

    // Update the product in the database
    const updatedAdmin = await Admin.update(
      {
        firstname,
        lastname,
        email,
      },
      { where: { id: adminId } },
    );

    if (updatedAdmin[0] === 0) {
      return res.status(404).json({ error: "Admin not found" });
    }

    // Respond with success message
    return res.status(200).json({ message: "Admin updated successfully" });
  } catch (error) {
    console.error("Error updating Admin:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const { id } = req.params;

  try {
    // Find the admin by ID
    const admin = await Admin.findByPk(id);

    if (!admin) {
      return res.status(404).json({ error: "admin not found" });
    }

    // Delete the admin
    await admin.destroy();

    // Respond with success message
    return res.status(200).json({ message: "Admin deleted successfully" });
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

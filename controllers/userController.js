const bcrypt = require("bcryptjs");
const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.findAll({
    attributes: { exclude: ["password"] },
  });
  return res.json(users);
}

// Display the specified resource.
async function show(req, res) {
  const id = req.params.id;

  const user = await User.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  return res.json(user);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const { firstname, lastname, email, phone, address } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);
  console.log(req.body);

  try {
    // Create the user in the database
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      phone,
      address,
      password,
    });

    // Respond with the newly created user
    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  const userId = req.params.id;

  const { firstname, lastname, email, address, phone } = req.body;
  try {
    // Validate the incoming data (e.g., check for required fields, data types)

    // Update the product in the database
    const updatedUser = await User.update(
      {
        firstname,
        lastname,
        email,
        phone,
        address,
      },
      { where: { id: userId } },
    );

    if (updatedUser[0] === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Respond with success message
    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const { id } = req.params;

  try {
    // Find the product by ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the user
    await user.destroy();

    // Respond with success message
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
// =======
// async function showLoginForm(req, res) {
//   res.render("login");
// }

// //Iniciar sesion del usuario
// async function login(req, res) {
//   const { email, password } = req.body;

//   if (!email) {
//     return res.status(400).json({ message: "El campo email es requerido" });
//   }

//   try {
//     //Buscar el usuario por su email
//     const user = await User.findOne({ where: { email } });

//     console.log("Usuario encontrado:", user);
//     // Si no se encuentra el usuario, mostrar un mensaje de error
//     if (!user) {
//       return res.status(404).json({ message: "Usuario no encontrado" });
//     }

//     // Verificar la contraseña
//     if (user.password !== password) {
//       return res.status(401).json({ message: "Contraseña Incorrecta" });
//     }

//     // Iniciar sesión del usuario (guardar su id en la sesión)
//     req.session.userId = user.id;
// >>>>>>> Stashed changes

//Cerrar sesion de un usuario

async function logout(req, res) {
  //destruir la sesion, borrando el id del usuario de la sesion
  req.session.destroy();

  res.redirect("/login");
}

//---

// Registrar un nuevo usuario
async function register(req, res) {
  const { username, email, password } = req.body;

  try {
    // Crear un nuevo usuario en la base de datos
    const newUser = await User.create({ username, email, password });

    // Redirigir al usuario a la página principal (o donde quieramos)
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  // =======

  logout,
  register,
};

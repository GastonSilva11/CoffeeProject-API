const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Admin } = require("../models");

async function validateUser(req, res) {
  //Validacion con el token

  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      console.log("Username does not exist.");
      return res.json({ msg: "Incorrect credentials. Please try again." });
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      console.log("Invalid password.");
      return res.json({ msg: "Incorrect credentials. Please try again." });
    }

    const token = jwt.sign({ sub: user.id, role: "user" }, process.env.JWT_SECRET);

    return res.json({
      token: token,
      userId: user.id,
      name: user.firstname,
      role: "user",
    });
  } catch (err) {
    console.log(err);
  }
}

async function validateAdmin(req, res) {
  try {
    const admin = await Admin.findOne({ where: { email: req.body.email } });

    if (!admin) {
      console.log("Admin does not exist.");
      return res.json({ msg: "Incorrect credentials. Please try again." });
    }

    const match = await bcrypt.compare(req.body.password, admin.password);

    if (!match) {
      console.log("Invalid password.");
      return res.json({ msg: "Incorrect credentials. Please try again." });
    }

    const token = jwt.sign({ sub: admin.id, role: "admin" }, process.env.JWT_SECRET);

    return res.json({
      token: token,
      adminId: admin.id,
      role: "admin",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  validateUser,
  validateAdmin,
};

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

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);

    return res.json({
      token: token,
      userId: user.id,
    });
  } catch (err) {
    console.log(err);
  }
}

async function validateAdmin(req, res) {
  console.log(req.body.email);
  console.log(req.body.password);

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

    const token = jwt.sign({ sub: admin.id }, process.env.JWT_SECRET);

    return res.json({
      token: token,
      adminId: admin.id,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  validateUser,
  validateAdmin,
};

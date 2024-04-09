const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

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

module.exports = {
  validateUser,
};

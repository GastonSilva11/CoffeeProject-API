const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/tokens", authController.validateUser);

module.exports = router;

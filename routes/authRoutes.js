const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/tokens", authController.validateUser);
router.post("/tokens/admin", authController.validateAdmin);

module.exports = router;

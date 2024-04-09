const express = require("express");
const router = express.Router();
const resetDbController = require("../controllers/resetDbController");

router.get("/", resetDbController.resetDb);

module.exports = router;

const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.get("/", adminController.index);
router.post("/", adminController.store);
router.get("/:id", adminController.show);
router.patch("/:id", adminController.update);
router.delete("/:id", adminController.destroy);

module.exports = router;

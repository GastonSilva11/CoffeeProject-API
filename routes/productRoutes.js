const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/", productController.index);
router.post("/", productController.store);
router.get("/:id", productController.show);
router.patch("/:id", productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;

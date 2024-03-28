const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// Rutas relacionadas a los products:
// ...

router.get("/", productController.index);
router.get("/create", productController.create);
router.post("/", productController.store);
router.get("/:id", productController.show);
router.get("/:id/edit", productController.edit);
router.patch("/:id/update", productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;

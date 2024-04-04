const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// Rutas relacionadas a los products:
// ...

router.get("/", productController.index);
router.get("/create", productController.create);
router.post("/", productController.store);
router.get("/:id", productController.show);
router.get("/edit/:id", productController.edit);
router.patch("/patch/:id", productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;

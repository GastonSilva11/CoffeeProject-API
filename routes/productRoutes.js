const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/", productController.index);
router.post("/", productController.store);
router.get("/:id", productController.show);

//TODO sacar/patch and change in  front Link
router.patch("/patch/:id", productController.update);

router.delete("/:id", productController.destroy);

module.exports = router;

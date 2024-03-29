const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

// Rutas relacionadas a los products:
// ...

router.get("/", categoryController.index);
router.get("/create", categoryController.create);
router.post("/", categoryController.store);
router.get("/:id", categoryController.show);
router.get("/:id/edit", categoryController.edit);
router.patch("/:id/update", categoryController.update);
router.delete("/:id", categoryController.destroy);

module.exports = router;

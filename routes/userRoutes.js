const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas a los usuarios:
// ...

// test coomment

router.get("/", userController.index);
router.post("/", userController.store);
router.get("/:id", userController.show);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;

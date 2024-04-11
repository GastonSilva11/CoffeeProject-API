const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();

router.get("/", orderController.index);
router.post("/", orderController.store);
router.get("/:id", orderController.show);
router.patch("/:id", orderController.update);
router.delete("/:id", orderController.destroy);

module.exports = router;
const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const isAdmin = require("../middlewares/isAdmin");

router.get(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  orderController.index,
);
router.post("/", orderController.store);

router.get(
  "/last",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  orderController.showTen,
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  orderController.show,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  orderController.update,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  orderController.destroy,
);

module.exports = router;

const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const isAdmin = require("../middlewares/isAdmin");
router.get(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  adminController.index,
);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  adminController.store,
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  adminController.show,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  adminController.update,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  adminController.destroy,
);

module.exports = router;

const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");

router.get(
  "/",
  // checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  adminController.index,
);
router.post(
  "/",
  // checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  adminController.store,
);
router.get(
  "/:id",
  // checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  adminController.show,
);
router.patch(
  "/:id",
  // checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  adminController.update,
);
router.delete(
  "/:id",
  // checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  adminController.destroy,
);

module.exports = router;

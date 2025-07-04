const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const authoriz = require("../middlewares/authoriz");

const adminController = require("./../controllers/adminController.js");

// only admin can access these routes
router.get("/home", auth, authoriz("admin"), (req, res) =>
  res.status(200).json({ message: "Admin access granted" }),
);

router.post("/create", auth, authoriz("admin"), adminController.createAdmin);

module.exports = router;

const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const authoriz = require("../middlewares/authoriz");

const adminController = require("./../controllers/adminController.js");

router.use(auth);
router.use(authoriz("admin"));

// only admin can access these routes
router.get("/home", (req, res) =>
  res.status(200).json({ message: "Admin access granted" }),
);

router.post("/createuser", adminController.createUser);
router.patch("/modifyuser", adminController.modifyUser);
router.delete("/deleteuser", adminController.deleteUser);

module.exports = router;

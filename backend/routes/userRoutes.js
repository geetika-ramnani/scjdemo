const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");
const authoriz = require("../middlewares/authoriz");
const passport = require("../config/passport");
const jwt = require("jsonwebtoken");

router.post("/register", userController.register);
router.get("/verify/:token", userController.verifyEmail);
router.post("/login", userController.login);
router.post("/resend-verification", userController.resendVerification);
router.post("/forgot-password", userController.forgotPassword);
router.post("/reset-password", userController.resetPassword);

// protected route : authorization required for access
router.get("/me", auth, (req, res) => res.json({ user: req.user }));

// example route that can be accessed by both user and admin
router.get("/user", auth, (req, res) =>
  res.json({ message: "User or Admin acess" }),
);

// only admin can access this route
router.get("/admin", auth, authoriz("admin"), (req, res) =>
  res.json({ message: "Admin access granted" }),
);

// Google OAuth
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user.id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );
    res.redirect(`${process.env.FRONTEND_URL}/oauth-callback?token=${token}`);
  },
);

// Facebook OAuth
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] }),
);
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user.id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );
    res.redirect(`${process.env.FRONTEND_URL}/oauth-callback?token=${token}`);
  },
);

// Twitter (X) OAuth
router.get("/auth/x", passport.authenticate("twitter"));
router.get(
  "/auth/x/callback",
  passport.authenticate("twitter", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user.id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );
    res.redirect(`${process.env.FRONTEND_URL}/oauth-callback?token=${token}`);
  },
);

module.exports = router;

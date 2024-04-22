const express = require("express");
const passport = require("../auth/auth");

const router = express.Router();

// Route to initiate Google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google redirect URL after user consent
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect to your application
    res.redirect("/");
  }
);

module.exports = router;

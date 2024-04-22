const router = require("express").Router();
const {
  registerUser,
  verifyUserEmail,
  forgotPassword,
  resetPassword,
  logInUser,
} = require("../controllers/userController");
const expressRateLimit = require("express-rate-limit");
const logInLimiter = expressRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 10, // Allow 10 requests per IP within the window
  message: { message: "Too many login attempts. Please try again later." },
});

const forgotPasswordLimiter = expressRateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5, // Allow 5 forgot password requests per IP within the window
  message: {
    message: "Too many forgot password attempts. Please try again later.",
  },
});

router.post("/register", registerUser);
router.post("/log-in", logInLimiter, logInUser);
router.get("/verify-email", verifyUserEmail);
router.post("/forgot-password", forgotPasswordLimiter, forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;

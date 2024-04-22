const router = require("express").Router();
const {
  registerUser,
  verifyUserEmail,
  forgotPassword,
  resetPassword,
  logInUser,
} = require("../controllers/userController");
const {
  forgotPasswordLimiter,
  logInLimiter,
} = require("../middleware/rateLimitMiddleware");

router.post("/register", registerUser);
router.post("/log-in", logInLimiter, logInUser);
router.get("/verify-email", verifyUserEmail);
router.post("/forgot-password", forgotPasswordLimiter, forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;

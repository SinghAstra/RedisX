const router = require("express").Router();
const {
  registerUser,
  verifyUserEmail,
  forgotPassword,
  resetPassword,
  logInUser,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/log-in", logInUser);
router.get("/verify-email", verifyUserEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;

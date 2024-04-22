const router = require("express").Router();
const {
  registerUser,
  verifyUserEmail,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.get("/verify-email", verifyUserEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;

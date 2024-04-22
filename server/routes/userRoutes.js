const router = require("express").Router();
const {
  registerUser,
  verifyUserEmail,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.get("/verify-email", verifyUserEmail);
module.exports = router;

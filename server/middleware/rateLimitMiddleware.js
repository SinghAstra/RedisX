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

module.exports = { logInLimiter, forgotPasswordLimiter };

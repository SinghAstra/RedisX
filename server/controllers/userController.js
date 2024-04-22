const User = require("../models/User");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Log registration attempt with user details (excluding password)
    logger.info("User registration attempt", { username, email });

    // Check if the required fields are present in the request body
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields." });
    }

    // Check if email is a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    // Check if the user already exists
    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email Already Registered." });
    }

    // Check if the username is already taken
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username is already taken" });
    }

    // Check if the password is at least 8 characters long and contains special character
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
    }

    // Generate a verification token
    const emailVerificationToken = generateEmailVerificationToken();

    // Create a new User instance using the User model
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      verified: false,
      emailVerificationToken,
      emailVerificationTokenExpiration: Date.now() + 24 * 60 * 60 * 1000,
    });

    // Save the new user to the database
    await newUser.save();

    // Log successful user registration with username and email
    logger.info("User registered successfully", { username, email });
    sendVerificationEmail(email, emailVerificationToken, logger);

    res.status(201).json({ username: newUser.username, email: newUser.email });
  } catch (err) {
    logger.error("Error registering user", err);
    res.status(500).send({ message: "Internal server error" });
  }
};

const verifyUserEmail = async (req, res) => {
  try {
    const { token } = req.query;

    logger.info("Verifying email with token", { token });

    // Check if verification token is provided
    if (!token) {
      return res.status(400).json({ message: "Missing verification token" });
    }

    // Find user by verification token
    const user = await User.findOne({
      emailVerificationToken: token,
      emailVerificationTokenExpiration: { $gt: Date.now() },
    });

    // Check if user is found and token is valid
    if (!user || user.emailVerificationToken !== token) {
      return res
        .status(400)
        .json({ message: "Invalid or expired verification token" });
    }

    // Update user's verified flag to true
    user.verified = true;
    user.emailVerificationToken = null;
    await user.save();

    logger.info("Email verification successful", { email: user.email });

    // Send success response
    res.status(200).json({ message: "Email verification successful" });
  } catch (err) {
    logger.error("Error verifying email", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Log request to reset password for email
    logger.info("Request to reset password for email:", { email });

    if (!email) {
      return res.status(400).json({ message: "Missing email" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      logger.info("User not found for password reset request", {
        email: "[REDACTED]",
      });
      return res.status(400).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetExpiresAt = Date.now() + 60 * 60 * 1000; // 1 hour

    user.resetPasswordToken = resetToken;
    user.resetPasswordTokenExpiration = resetExpiresAt;

    await user.save();

    sendResetPasswordEmail(email, resetToken, logger);

    res
      .status(200)
      .json({ message: "Password reset instructions sent to your email" });
  } catch (err) {
    logger.error("Error requesting password reset", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    // Log attempt to reset password with token
    logger.info("Attempt to reset password with token:", { token });

    if (!token || !password) {
      return res.status(400).json({ message: "Missing Credentials" });
    }

    // Check if the password is at least 8 characters long and contains special character
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordTokenExpiration: { $gt: Date.now() },
    });
    if (!user) {
      // Log attempt with invalid/expired token without revealing email
      logger.info("Invalid or expired reset token used for password reset");
      return res
        .status(400)
        .json({ message: "Invalid or expired reset token" });
    }

    user.password = password;
    user.resetPasswordToken = null;
    user.resetPasswordTokenExpiration = null;
    await user.save();

    logger.info("Password reset successful for user", { userId: user._id });
    res.status(200).json({ message: "Password reset successful" });
  } catch (err) {
    logger.error("Error resetting password", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Log login attempt with email (avoid logging password)
    logger.info("Login attempt with email:", { email });
    // Check for required fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields." });
    }

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const validPassword = bcrypt.compare(password, user.password);

    // Check password validity
    if (!validPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    logger.info("Login successful for user", { userId: user._id });

    // Generate JWT token (replace with your secret key and expiration time)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with user information and token (exclude sensitive data)
    res.status(200).json({
      success: true,
      message: "LogIn successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    logger.error("Error logging in user", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const generateEmailVerificationToken = () => {
  return crypto.randomBytes(20).toString("hex");
};

const sendVerificationEmail = (email, token, logger) => {
  try {
    const baseUrl = "http://localhost:5000";
    const verificationUrl = `${baseUrl}/users/verify-email?token=${token}`;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });

    const mailOptions = {
      from: "singhisabhaypratap@gmail.com",
      to: email,
      subject: "Email Verification",
      html: `
      <head>
        <style>
          .container {
            font-family: monospace;
            padding:16px;
            background-color: black;
            color: white;
          }
          .heading{
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          p{
            font-size: 16px;
          }
          a {
            text-decoration: none;
            padding:8px 16px;
            background-color: cyan;
            margin:10px;
          }
        </style>
      </head>
      <body>
      <div class="container">
      <h1 class="heading">Confirm Your Email Address!</h1>
      <p>Tap the button below to confirm your email address. If you didn't create an account with Web Auth, you can safely delete this email.</p>
      <a href="${verificationUrl}">Verify Your Email</a>
      <p>This link will expire in 24 hours. If you don't verify your email within 24 hours, you'll need to request a new verification link.</p>
      </div>
      </body>
        `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        logger.error("Error sending email", error);
      } else {
        logger.info("Email sent successfully:", { response: info.response });
      }
    });
  } catch (error) {
    logger.error("Error sending verification email", error);
    throw error;
  }
};

const sendResetPasswordEmail = (email, token, logger) => {
  try {
    const baseUrl = "http://localhost:5000";
    const resetUrl = `${baseUrl}/users/reset-password?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });

    const mailOptions = {
      from: "singhisabhaypratap@gmail.com",
      to: email,
      subject: "Reset Your Password",
      html: `
        <head>
          <style>
            .container {
              font-family: monospace;
              padding: 16px;
              background-color: black;
              color: white;
            }
            .heading {
              font-size: 32px;
              font-weight: bold;
              margin-bottom: 20px;
            }
            p {
              font-size: 16px;
            }
            a {
              text-decoration: none;
              padding: 8px 16px;
              background-color: cyan;
              margin: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="heading">Reset Your Password</h1>
            <p>Click the button below to reset your password for your account.</p>
            <a href="${resetUrl}">Reset Password</a>
            <p>This link will expire in 1 hour. If you didn't request a password reset, you can safely ignore this email.</p>
          </div>
        </body>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        logger.error("Error sending password reset email", error);
      } else {
        logger.info("Password reset email sent successfully:", {
          response: info.response,
        });
      }
    });
  } catch (error) {
    logger.error("Error sending password reset email", error);
    throw error;
  }
};

module.exports = {
  registerUser,
  verifyUserEmail,
  forgotPassword,
  resetPassword,
  logInUser,
};

const User = require("../models/User");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

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

    sendVerificationEmail(email, emailVerificationToken);

    res.status(201).json({ username: newUser.username, email: newUser.email });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
};

const verifyUserEmail = async (req, res) => {
  try {
    const { token } = req.query;

    // Check if verification token is provided
    if (!token) {
      return res.status(400).json({ message: "Missing verification token" });
    }

    // Find user by verification token
    const user = await User.findOne({ emailVerificationToken: token });

    // Check if user is found and token is valid
    if (
      !user ||
      user.emailVerificationToken !== token ||
      isTokenExpired(user.emailVerificationTokenExpiration)
    ) {
      return res
        .status(400)
        .json({ message: "Invalid or expired verification token" });
    }

    // Update user's verified flag to true
    user.verified = true;
    user.emailVerificationToken = null;
    await user.save();

    // Send success response
    res.status(200).json({ message: "Email verification successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const generateEmailVerificationToken = () => {
  return crypto.randomBytes(20).toString("hex");
};

// Function to send verification email
const sendVerificationEmail = async (email, token) => {
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
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  } catch (error) {
    return error;
  }
};

const isTokenExpired = (expirationTime) => {
  return Date.now() > expirationTime;
};

module.exports = {
  registerUser,
  verifyUserEmail,
  sendVerificationEmail,
};

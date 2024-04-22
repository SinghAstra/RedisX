const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const verifyJWT = require("./middleware/verifyJWTMiddleware");
const MongoStore = require("connect-mongo");
const session = require("express-session");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error(err));

// Configure session middleware with secret key
app.use(
  session({
    secret: "your_secret_key_here",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.CONNECTION_URL,
      collectionName: "sessions",
      ttl: 14 * 24 * 60 * 60, // 14 days
    }),
    cookie: { secure: false }, // Set to true for HTTPS
  })
);

// Configure cookie parser
app.use(cookieParser());

app.use(bodyParser.json());
app.use(cors());
app.use("/users", userRoutes);

app.get("/", verifyJWT, (req, res) => {
  return res.json({ message: "Web-Auth API is running..." });
});

app.listen(5000, () => console.log(`Server listening on port 5000`));

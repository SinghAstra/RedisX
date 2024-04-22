const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");
const app = express();
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(cors());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  return res.json({ message: "Web-Auth API is running..." });
});

app.listen(5000, () => console.log(`Server listening on port 5000`));

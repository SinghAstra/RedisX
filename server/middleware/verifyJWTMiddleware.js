const jwt = require("jsonwebtoken");
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

const verifyJWT = (req, res, next) => {
  // Get JWT from cookie
  const token = req.cookies.jwt;

  if (!token) {
    logger.info("Unauthorized access attempt (missing JWT token)");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    logger.error("JWT verification failed", err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = verifyJWT;

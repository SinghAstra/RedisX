const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  sessionData: { type: Object, required: true },
  expiresAt: { type: Date, default: Date.now() + 24 * 60 * 60 * 1000 }, // 1 day expiration
});

module.exports = mongoose.model("Session", SessionSchema);

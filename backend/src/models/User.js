const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    displayName: { type: String, required: true },
    role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
    assignedRoadmap: { type: mongoose.Schema.Types.ObjectId, ref: 'Roadmap' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const weekProgressSchema = new mongoose.Schema(
  {
    phaseId: { type: String, required: true },
    weekNumber: { type: Number, required: true },
    status: { type: String, enum: ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'], default: 'NOT_STARTED' }
  },
  { _id: false }
);

const phaseProgressSchema = new mongoose.Schema(
  {
    phaseId: { type: String, required: true },
    status: { type: String, enum: ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'], default: 'NOT_STARTED' }
  },
  { _id: false }
);

const roadmapProgressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roadmapId: { type: mongoose.Schema.Types.ObjectId, ref: 'Roadmap', required: true },
    phaseProgress: [phaseProgressSchema],
    weekProgress: [weekProgressSchema],
    disciplineScore: { type: Number, default: 100 },
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    missedDays: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('RoadmapProgress', roadmapProgressSchema);

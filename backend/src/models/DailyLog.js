const mongoose = require('mongoose');

const dailyLogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    topicsStudied: [{ type: String }],
    dsaProblemsSolved: { type: Number, default: 0 },
    studyDurationHours: { type: Number, default: 0 },
    notes: { type: String },
    blockers: { type: String }
  },
  { timestamps: true }
);

dailyLogSchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('DailyLog', dailyLogSchema);

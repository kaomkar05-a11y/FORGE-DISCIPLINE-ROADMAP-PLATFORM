const mongoose = require('mongoose');

const projectProgressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roadmapId: { type: mongoose.Schema.Types.ObjectId, ref: 'Roadmap', required: true },
    phaseId: { type: String, required: true },
    title: { type: String, required: true },
    status: { type: String, enum: ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'], default: 'NOT_STARTED' },
    githubRepoUrl: { type: String },
    deploymentUrl: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('ProjectProgress', projectProgressSchema);

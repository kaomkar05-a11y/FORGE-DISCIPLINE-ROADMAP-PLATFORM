const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    resources: [{ type: String }]
  },
  { _id: false }
);

const weekSchema = new mongoose.Schema(
  {
    phaseId: { type: String, required: true },
    weekNumber: { type: Number, required: true },
    goals: [{ type: String, required: true }],
    topics: [topicSchema]
  },
  { _id: false }
);

const dailyRuleSchema = new mongoose.Schema(
  {
    minDSAProblems: { type: Number, required: true },
    mandatoryStudyHours: { type: Number, required: true },
    mandatoryNotes: { type: Boolean, required: true }
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [{ type: String, required: true }],
    requiresDeployment: { type: Boolean, default: true }
  },
  { _id: false }
);

const phaseSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    order: { type: Number, required: true },
    weeks: [weekSchema],
    buildTasks: [{ type: String }],
    projects: [projectSchema]
  },
  { _id: false }
);

const roadmapSchema = new mongoose.Schema(
  {
    metadata: {
      name: { type: String, required: true },
      description: { type: String, required: true },
      durationWeeks: { type: Number, required: true },
      difficulty: { type: String, required: true },
      category: { type: String, required: true }
    },
    phases: [phaseSchema],
    dailyRules: dailyRuleSchema
  },
  { timestamps: true }
);

module.exports = mongoose.model('Roadmap', roadmapSchema);

const DailyLog = require('../models/DailyLog');
const Roadmap = require('../models/Roadmap');
const RoadmapProgress = require('../models/RoadmapProgress');

const createDailyLog = async (req, res, next) => {
  try {
    const userId = req.user.sub;
    const { date, topicsStudied, dsaProblemsSolved, studyDurationHours, notes, blockers } = req.body;
    const roadmap = await Roadmap.findById(req.body.roadmapId);
    if (!roadmap) {
      const error = new Error('Roadmap not found');
      error.status = 404;
      throw error;
    }
    if (dsaProblemsSolved < roadmap.dailyRules.minDSAProblems) {
      const error = new Error('Daily DSA minimum not met');
      error.status = 422;
      throw error;
    }
    if (studyDurationHours < roadmap.dailyRules.mandatoryStudyHours) {
      const error = new Error('Daily study hours minimum not met');
      error.status = 422;
      throw error;
    }
    if (roadmap.dailyRules.mandatoryNotes && !notes) {
      const error = new Error('Daily notes are mandatory');
      error.status = 422;
      throw error;
    }

    const log = await DailyLog.create({
      userId,
      date,
      topicsStudied,
      dsaProblemsSolved,
      studyDurationHours,
      notes,
      blockers
    });
    res.status(201).json(log);
  } catch (error) {
    next(error);
  }
};

const getDashboard = async (req, res, next) => {
  try {
    const userId = req.user.sub;
    const { roadmapId } = req.query;
    const progress = await RoadmapProgress.findOne({ userId, roadmapId });
    res.json({
      progress: progress || {
        disciplineScore: 100,
        currentStreak: 0,
        longestStreak: 0,
        missedDays: 0
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createDailyLog, getDashboard };

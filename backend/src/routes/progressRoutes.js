const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { validateRequest } = require('../middlewares/validateRequest');
const { createDailyLog, getDashboard } = require('../controllers/progressController');
const { dailyLogSchema } = require('../validation/progressValidation');

const router = express.Router();

router.get('/dashboard', authMiddleware, getDashboard);
router.post('/daily-log', authMiddleware, validateRequest(dailyLogSchema), createDailyLog);

module.exports = { progressRoutes: router };

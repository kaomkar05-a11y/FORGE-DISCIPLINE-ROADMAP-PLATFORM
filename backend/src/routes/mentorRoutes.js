const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { validateRequest } = require('../middlewares/validateRequest');
const { askMentor } = require('../controllers/mentorController');
const { mentorSchema } = require('../validation/mentorValidation');

const router = express.Router();

router.post('/', authMiddleware, validateRequest(mentorSchema), askMentor);

module.exports = { mentorRoutes: router };

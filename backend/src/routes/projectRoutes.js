const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { validateRequest } = require('../middlewares/validateRequest');
const { listProjects, updateProject } = require('../controllers/projectController');
const { updateProjectSchema } = require('../validation/projectValidation');

const router = express.Router();

router.get('/', authMiddleware, listProjects);
router.put('/:id', authMiddleware, validateRequest(updateProjectSchema), updateProject);

module.exports = { projectRoutes: router };

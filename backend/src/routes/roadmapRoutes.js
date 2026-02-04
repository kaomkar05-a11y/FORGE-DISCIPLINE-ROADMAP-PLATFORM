const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const {
  listRoadmaps,
  getRoadmap,
  createRoadmap,
  updateRoadmap,
  cloneRoadmap
} = require('../controllers/roadmapController');
const { validateRequest } = require('../middlewares/validateRequest');
const { createRoadmapSchema, updateRoadmapSchema } = require('../validation/roadmapValidation');

const router = express.Router();

router.get('/', authMiddleware, listRoadmaps);
router.get('/:id', authMiddleware, getRoadmap);
router.post('/', authMiddleware, validateRequest(createRoadmapSchema), createRoadmap);
router.put('/:id', authMiddleware, validateRequest(updateRoadmapSchema), updateRoadmap);
router.post('/:id/clone', authMiddleware, cloneRoadmap);

module.exports = { roadmapRoutes: router };

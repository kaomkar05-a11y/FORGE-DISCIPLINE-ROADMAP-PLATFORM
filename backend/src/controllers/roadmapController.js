const Roadmap = require('../models/Roadmap');

const listRoadmaps = async (_req, res, next) => {
  try {
    const roadmaps = await Roadmap.find().sort({ createdAt: -1 });
    res.json(roadmaps);
  } catch (error) {
    next(error);
  }
};

const getRoadmap = async (req, res, next) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);
    if (!roadmap) {
      const error = new Error('Roadmap not found');
      error.status = 404;
      throw error;
    }
    res.json(roadmap);
  } catch (error) {
    next(error);
  }
};

const createRoadmap = async (req, res, next) => {
  try {
    const roadmap = await Roadmap.create(req.body);
    res.status(201).json(roadmap);
  } catch (error) {
    next(error);
  }
};

const updateRoadmap = async (req, res, next) => {
  try {
    const roadmap = await Roadmap.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!roadmap) {
      const error = new Error('Roadmap not found');
      error.status = 404;
      throw error;
    }
    res.json(roadmap);
  } catch (error) {
    next(error);
  }
};

const cloneRoadmap = async (req, res, next) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);
    if (!roadmap) {
      const error = new Error('Roadmap not found');
      error.status = 404;
      throw error;
    }
    const clone = roadmap.toObject();
    delete clone._id;
    clone.metadata.name = `${clone.metadata.name} (Clone)`;
    const created = await Roadmap.create(clone);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listRoadmaps,
  getRoadmap,
  createRoadmap,
  updateRoadmap,
  cloneRoadmap
};

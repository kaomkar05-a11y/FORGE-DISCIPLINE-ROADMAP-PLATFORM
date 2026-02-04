const ProjectProgress = require('../models/ProjectProgress');

const listProjects = async (req, res, next) => {
  try {
    const userId = req.user.sub;
    const { roadmapId } = req.query;
    const projects = await ProjectProgress.find({ userId, roadmapId });
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const project = await ProjectProgress.findById(req.params.id);
    if (!project) {
      const error = new Error('Project not found');
      error.status = 404;
      throw error;
    }
    const { status, githubRepoUrl, deploymentUrl } = req.body;
    if (status === 'COMPLETED' && !deploymentUrl) {
      const error = new Error('Deployment URL required to complete project');
      error.status = 422;
      throw error;
    }
    project.status = status || project.status;
    project.githubRepoUrl = githubRepoUrl || project.githubRepoUrl;
    project.deploymentUrl = deploymentUrl || project.deploymentUrl;
    await project.save();
    res.json(project);
  } catch (error) {
    next(error);
  }
};

module.exports = { listProjects, updateProject };

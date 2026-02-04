const { getMentorResponse } = require('../services/mentorService');

const askMentor = async (req, res, next) => {
  try {
    const { userContext, request } = req.body;
    const response = await getMentorResponse({ userContext, request });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { askMentor };

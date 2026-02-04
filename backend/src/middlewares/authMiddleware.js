const jwt = require('jsonwebtoken');
const { env } = require('../config/env');

const authMiddleware = (req, _res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');
  if (!token) {
    const error = new Error('Unauthorized');
    error.status = 401;
    throw error;
  }
  try {
    const payload = jwt.verify(token, env.jwtSecret);
    req.user = payload;
    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
};

module.exports = { authMiddleware };

const { env } = require('../config/env');

const errorHandler = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Unexpected error';
  if (env.nodeEnv !== 'test') {
    console.error(err);
  }
  res.status(status).json({ error: message });
};

module.exports = { errorHandler };

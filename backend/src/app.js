const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const { env } = require('./config/env');
const { errorHandler } = require('./middlewares/errorHandler');
const { notFoundHandler } = require('./middlewares/notFoundHandler');
const { authRoutes } = require('./routes/authRoutes');
const { roadmapRoutes } = require('./routes/roadmapRoutes');
const { mentorRoutes } = require('./routes/mentorRoutes');
const { progressRoutes } = require('./routes/progressRoutes');
const { projectRoutes } = require('./routes/projectRoutes');

const app = express();

app.use(cors({ origin: env.webOrigin, credentials: true }));
app.use(express.json({ limit: '2mb' }));
app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
  })
);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: env.appName });
});

app.use('/api/auth', authRoutes);
app.use('/api/roadmaps', roadmapRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/mentor', mentorRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = { app };

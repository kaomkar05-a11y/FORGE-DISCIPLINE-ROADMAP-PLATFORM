const mongoose = require('mongoose');
const { app } = require('./app');
const { env } = require('./config/env');

mongoose
  .connect(env.mongoUri)
  .then(() => {
    app.listen(env.port, () => {
      console.log(`${env.appName} API running on port ${env.port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  });

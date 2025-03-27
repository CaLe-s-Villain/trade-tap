const rootRoutes = require('./routes/root.routes');
const apiRoutes = require('./routes/api.routes');
const messageRoutes = require('./routes/message.routes');
/**
 * Registers all application routes with the main Express app.
 * Keeps app.js clean and scalable.
 */
const loadRoutes = (app, models = {}) => {
  app.use('/', rootRoutes);
  app.use('/api', apiRoutes);
  app.use('/api/message', messageRoutes(models.Message));
};

module.exports = loadRoutes;

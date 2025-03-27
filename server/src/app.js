const express = require('express');
const models = require('./models');
const loadRoutes = require('./loadRoutes');

const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

app.use(express.json());

// Cleanly register all routes
loadRoutes(app, models);

module.exports = app;

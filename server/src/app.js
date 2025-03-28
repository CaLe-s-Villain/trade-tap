const express = require('express');
const cors = require('cors');
const models = require('./models');
const loadRoutes = require('./loadRoutes');

require('dotenv').config(); // Load environment variables

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
  }),
);

app.use(express.json());

// Cleanly register all routes
loadRoutes(app, models);

module.exports = app;

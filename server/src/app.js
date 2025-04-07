const express = require('express');
const cors = require('cors');
const models = require('./models');
const loadRoutes = require('./loadRoutes');

require('dotenv').config();
// Load environment variables
console.log(`Client Origin: ${process.env.CLIENT_ORIGIN}`);
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

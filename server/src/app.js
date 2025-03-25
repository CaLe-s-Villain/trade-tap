const express = require('express');

const app = express();
const cors = require('cors');

const { Message } = require('./models');

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.get('/api', (req, res) => {
  res.json({ text: 'Hello from static backend' });
});

app.get('/api/message', async (req, res) => {
  const msg = await Message.findOne();
  res.json({ text: msg?.text || 'No message found' });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

module.exports = app;

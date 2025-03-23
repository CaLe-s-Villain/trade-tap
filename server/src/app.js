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
  console.log('hi mom');
  res.json({ message: 'Hello from backend' });
});

app.get('/api/message', async (req, res) => {
  const msg = await Message.findOne();
  res.json({ text: msg?.text || 'No message found' });
});

module.exports = app;

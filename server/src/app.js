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
  res.json({ message: 'Hello from backend' });
});

app.get('/api/message', async (req, res) => {
  try {
    const msg = await Message.findOne();
    res.json({ text: msg?.text || 'No message found' });
  } catch (err) {
    if (
      err.name === 'SequelizeDatabaseError' &&
      /relation .* does not exist/.test(err.message)
    ) {
      console.warn('⚠️ "Messages" table not found. Run migrations.');
      return res
        .status(503)
        .json({ error: 'Service not ready: Messages table missing' });
    }

    console.error('❌ Unexpected error in /api/message:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
58;

module.exports = app;

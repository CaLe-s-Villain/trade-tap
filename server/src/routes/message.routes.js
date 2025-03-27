// src/routes/message.routes.js
module.exports = (Message) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const messages = await Message.findAll();
      res.status(200).json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const { text } = req.body;
      const newMessage = await Message.create({ text });
      res.status(201).json(newMessage);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create message' });
    }
  });

  router.get('/latest', async (req, res) => {
    try {
      // console.log(Message);
      const msg = await Message.findOne();

      return res.json({ text: msg?.text || 'No message found' });
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
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};

const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // TODO: make this a log entry instead of console
  console.log(`🚀 Server running on port ${PORT}`);
});

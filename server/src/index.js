const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // TODO: make this a log entry instead of console
  console.log(`🚀 Server running on port ${PORT}`);
});

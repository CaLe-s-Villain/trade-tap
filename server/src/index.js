// Load environment variables from the correct file
require('./config/env');

console.log(`[env] SERVER_PORT is: ${process.env.SERVER_PORT}`);

const app = require('./app');

const PORT = process.env.SERVER_PORT || 5001;

app.listen(PORT, () => {
  // TODO: Replace with proper logger later
  console.log(`🚀 Server running on port ${PORT}`);
});

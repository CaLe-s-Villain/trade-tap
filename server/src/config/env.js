const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// If inside DOcker container, assume env vars were injected via Docker Compose
if (fs.existsSync('/.dockerenv')) {
  console.log(
    '[env] Running inside Docker container, using injected environment variables',
  );
} else {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log('[env] Loaded environment from .env');
  } else {
    console.warn('[env] No local .env file found. Falling back to process.env');
  }
}

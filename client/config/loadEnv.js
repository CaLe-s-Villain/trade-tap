// client/config/loadEnv.js
import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';

const isDocker = fs.existsSync('/.dockerenv');
const isCI = process.env.CI === 'true';

let envFile = '.env'; // default to local

if (isDocker) {
  envFile = '.env.docker';
} else if (isCI) {
  // GitHub Actions or other CI providers will inject env vars directly
  console.log('[env] Running in CI/CD - using process.env only');
  // Skip loading any local file
}

const rootPath = path.resolve(__dirname, '../../', envFile);

if (fs.existsSync(rootPath)) {
  const result = dotenv.config({ path: rootPath });
  if (result.error) {
    console.error(`[env] Failed to load ${envFile}:`, result.error);
  } else {
    console.log(`[env] Loaded environment from ${envFile}`);
  }
} else {
  console.warn(
    `[env] No environment file found at ${envFile}, relying on process.env`,
  );
}

// Export relevant vars to be injected via Vite's define
const clientEnv = {
  'import.meta.env.VITE_API_BASE_URL': JSON.stringify(
    process.env.VITE_API_BASE_URL || '',
  ),
};

export default clientEnv;

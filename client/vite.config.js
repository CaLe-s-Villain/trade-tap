// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import clientEnv from './config/loadEnv';

export default defineConfig({
  plugins: [react()],
  define: clientEnv, // Inject only safe public values
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});

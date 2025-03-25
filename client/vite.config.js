import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isDocker = process.env.DOCKER === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    cors: true,
    // origin: isDocker ? 'http://client:5173' : 'http://localhost:5173',
    headers: {
      'Access-Control-Allow-Origin': '*', // 👈 this is key
    },
    allowedHosts: ['client'],
  },
});

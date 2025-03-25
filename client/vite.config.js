import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Required for Docker
    strictPort: true,
    port: 5173,
    cors: true, // Allow cross-origin (optional but good for testing)
    origin: 'http://client:5173', // 👈 Optional, but can help with consistency
  },
});

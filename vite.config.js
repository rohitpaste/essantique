import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,  // 👈 Important for React Router
  },
  base: process.env.VITE_BASE_PATH || "/essantique"
});

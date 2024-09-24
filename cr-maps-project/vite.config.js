import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    historyApiFallback: true,  // Ensures React Router works with Vite
  },
  optimizeDeps: {
    include: ['mapbox-gl'],  // Ensure Vite includes mapbox-gl for optimization
  },
});

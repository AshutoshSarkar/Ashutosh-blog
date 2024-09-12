import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false, // Disable SSL verification if your backend is using HTTP
      },
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory explicitly
  },
});

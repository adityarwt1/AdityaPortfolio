// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/adityaportfolio2025/', // Replace <REPO_NAME> with your GitHub repository name
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/HR-platform-web-application/'   // 👈 Exactly your GitHub repo name with slashes
});

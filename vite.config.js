import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@img', replacement: path.resolve(__dirname, 'assets/images') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@ui', replacement: path.resolve(__dirname, 'src/ui') },
      { find: '@serv', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@forms', replacement: path.resolve(__dirname, 'src/components/forms') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@comp', replacement: path.resolve(__dirname, 'src/components') },
    ],
  },
});

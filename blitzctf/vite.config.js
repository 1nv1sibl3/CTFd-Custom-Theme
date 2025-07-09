import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'assets',
  base: '/themes/blitzctf/static/',
  build: {
    outDir: '../static',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'assets/js/main.js'),
        style: resolve(__dirname, 'assets/css/main.scss')
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: 'css/[name].[ext]'
      }
    }
  }
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: '/sa-form/',
  build: {
    outDir: process.env.BUILD_ENV === 'doc' ? 'docs' : 'dist'
  },
  resolve: {
    alias: [
      {
        find: '@antv/x6',
        replacement: '@antv/x6/dist/x6.js'
      },
      {
        find: '@antv/x6-vue-shape',
        replacement: '@antv/x6-vue-shape/lib'
      }
    ]
  }
});

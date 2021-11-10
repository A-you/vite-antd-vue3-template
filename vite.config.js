/*
 * @Author: ymy
 * @Date: 2021-11-08 17:00:13
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-09 10:26:04
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'src/components'),
      '#': resolve(__dirname, 'src/pages')
    }
  },
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ]
})

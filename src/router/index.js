/*
 * @Author: ymy
 * @Date: 2021-11-09 09:47:25
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-10 13:23:04
 */

import { createRouter, createWebHashHistory } from "vue-router";
import sysRoutes from '@/router/sysRoutes'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/home/index.vue'),
    children: [
      ...sysRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '系统登录页',
    },
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(''),
  routes
})

export function setupRouter (app) {
  app.use(router)
}

export default router

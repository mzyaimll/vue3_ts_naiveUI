/*
 * @Autor: GeekMzy
 * @Date: 2022-04-18 09:40:21
 * @LastEditors: GeekMzy
 * @LastEditTime: 2022-04-18 09:40:23
 * @FilePath: \vite_vue3_ts\src\router\router.ts
 * @Author: desktop-1llkr2o
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

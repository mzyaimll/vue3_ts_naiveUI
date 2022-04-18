/*
 * @Autor: GeekMzy
 * @Date: 2022-04-14 13:56:43
 * @LastEditors: GeekMzy
 * @LastEditTime: 2022-04-18 09:52:08
 * @FilePath: \vite_vue3_ts\src\main.ts
 * @Author: desktop-1llkr2o
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')

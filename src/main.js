/*
 * @Author: ymy
 * @Date: 2021-11-08 17:00:13
 * @LastEditors: ymy
 * @LastEditTime: 2021-11-09 14:19:12
 */
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from "./router/index";
import store from './store'
import { setupAnd } from './plugins/index'
const app = createApp(App)

// 引入and
setupAnd(app)
//注册路由
setupRouter(app)
//挂在vuex
app.use(store)
router.isReady().then(() => app.mount("#app"))


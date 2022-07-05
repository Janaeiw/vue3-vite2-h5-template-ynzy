import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import directives from './directive/index.js' // 自定义指令
import '@/styles/index.scss'
// 全局引入按需引入UI库 vant
// import { vantPlugins } from './plugins/vant'

const app = createApp(App)
window.vm = app
directives.buttonAuth(app) // 按钮权限
app.use(store)
// app.use(vantPlugins)
app.use(router)

app.mount('#app')

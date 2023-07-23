import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 注意：vant样式放在main.scss之前
import 'vant/lib/index.css'
// 引入样式
import './styles/main.scss'

// vant使用提示
import {} from 'vant'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

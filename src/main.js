import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './routes'
import 'normalcss'
import '@/assets/css/typo.css'
import '@/assets/css/base.css'
createApp(App).use(router).mount('#app')

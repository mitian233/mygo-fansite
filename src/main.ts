import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app:any = createApp(App)

app.use(router).mount('#app')
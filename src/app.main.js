import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/tailwind.css'
import vScroll from './utils/vScroll.js'

const app = createApp(App)

app.use(router)

app.directive('scroll', vScroll)

app.mount('#app')

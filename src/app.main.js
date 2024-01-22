import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/tailwind.css'
import vScroll from './utils/vScroll.js'
import ScrollReveal from 'scrollreveal'
import FlagIcon from 'vue-flag-icon'

const app = createApp(App)

app.use(router)

app.use(FlagIcon)

app.use(
    ScrollReveal({
        reset: false,
        distance: '100px',
        duration: 1500,
        delay: 100
    })
)

app.directive('scroll', vScroll)

app.mount('#app')

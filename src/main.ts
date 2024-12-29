import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './core/router'

// css
import './tailwind.css'
import './core/styles/base.style.css'

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './app/router/index'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Popper from "@popperjs/core"
createApp(App).use(router).use(Popper).mount('#app')

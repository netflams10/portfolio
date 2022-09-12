import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createApp } from 'vue'
import VueFeather from 'vue-feather';
import App from './App.vue'

createApp(App)
.component(VueFeather.name, VueFeather)
.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
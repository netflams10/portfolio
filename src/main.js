import { createApp } from 'vue'
import VueFeather from 'vue-feather';
import { createStore } from 'vuex'
import { MotionPlugin } from '@vueuse/motion'
import LottieAnimation from "lottie-web-vue";
import App from './App.vue'

const store = createStore({
    state () {
        return {
            stacks: [],
            projects: [],
            contacts: [],
            logo: null,
        }
    },
    mutations: {
        SET_ALL_DATA (state, payload) {
            state.stacks = payload.stacks
            state.projects = payload.projects
            state.contacts = payload.contacts
            state.logo = payload.logo
            state.testimonials = payload.testimonials
        }
    },
    actions: {
        getData ({commit}) {
            fetch('/db.json')
                .then(res => res.json())
                .then(data => commit('SET_ALL_DATA', data))
                .catch(e => console.log("Shouldnt this be happening:", e.message))
        }
    },
    getters: {},
  })

createApp(App)
.component(VueFeather.name, VueFeather)
.use(store)
.use(LottieAnimation)
.use(MotionPlugin)
.mount('#app')
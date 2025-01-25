import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Routes from '@/routes.js'


const router = createRouter({
    history: createWebHistory(),
    routes: Routes,
});

createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue';
import Animate from './pages/Animate.vue';
import Number from './pages/Number.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Animate },
  { path: '/number', component: Number },
]


const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});
app.use(router);
app.mount('#app');

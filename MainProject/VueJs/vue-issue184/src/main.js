import { createApp } from 'vue'
import App from './App.vue'
import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";
import About from "./pages/About.vue";
import Posts from "./pages/Posts.vue";
import CreatePost from "./pages/CreatePost.vue";
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
  { path: "/post", component: Posts },
  { path: "/createPost", component: CreatePost }
];
axios.defaults.baseURL = "https://vue-posts-af023-default-rtdb.firebaseio.com/";
const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: routes

})
app.use(router);
app.mount('#app');



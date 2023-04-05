import { createApp } from 'vue'
import App from './App.vue'
import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";
import About from "./pages/About.vue";
import Posts from "./pages/Posts.vue";
import CreatePost from "./pages/CreatePost.vue";
import PostItem from "./pages/PostItem.vue";
import NotFound from "./components/NotFound.vue";
import PostMessage from "./pages/PostMessage.vue"
import { createRouter, createWebHistory } from 'vue-router'


import axios from 'axios';
const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
  {
    path: "/posts", component: Posts,
    children: [
      {
        path: "",
        component: PostMessage
      },
      {
        path: ":id",
        component: PostItem
      },
      {
        path: 'create-post',
        component: CreatePost
      }
    ]
  },
  // {path:"/posts/:id",component: PostItem},
  { path: "/createPost", component: CreatePost },
  // {path:"/notFound",component: NotFound},
  { path: '/:pathMatch(.*)*', component: NotFound }

];
axios.defaults.baseURL = "https://vue-posts-af023-default-rtdb.firebaseio.com/";
const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: routes

})
app.use(router);
app.mount('#app');



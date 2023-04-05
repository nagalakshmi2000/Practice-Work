import { createApp } from 'vue'
import App from './App.vue'
import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";
import About from "./pages/About.vue";
import Posts from "./pages/Posts.vue";
import CreatePost from "./pages/CreatePost.vue";
import PostItem from "./pages/PostItem.vue";
import NotFound from "./components/NotFound.vue";
import PostMessage from "./pages/PostMessage.vue";
import Footer from "./pages/Footer.vue"
import { createRouter, createWebHistory } from 'vue-router'


import axios from 'axios';
const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/aboutUs", component: About },
  {path: "/xyz",name: 'posts',
    // beforeEnter: (to, from, next) => {
    //   console.log('route based before enter')
    //   next({path: '/contact'})
    // },
    components: {
      default: Posts,
      footer: Footer
    },
    children: [
      {
        path: "",
        component: PostMessage
      },
      {
        path: "/singlePost/:id",
        name: "singlePost",
        component: PostItem
      },
      {
        path: '/create-post',
        name: "createPost",
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

});
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  console.log('global before each')
  if (to.path == '/contact') {
    next({ name: 'posts' });
  }
  next();
});
router.afterEach((to,from) =>{
  console.log('global after each');
});
app.use(router);
app.mount('#app');



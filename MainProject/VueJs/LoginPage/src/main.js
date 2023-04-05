import { createApp } from 'vue'
import App from './App.vue'
import Home from "./Pages/Home.vue";
import Login from "./Pages/Login.vue";
import Registration from "./Pages/Registration.vue";
import Categories from "./Pages/Categories.vue";
import AddCategories from "./Pages/AddCategories.vue";
import AddPost from "./Pages/AddPost.vue";
import Posts from "./Pages/Posts.vue";
import Order from "./Pages/Order.vue";
import { getToken } from "./services/LocalStorage";
import AddToCart from "./Pages/AddToCart.vue";
import PaymentDetails from "./Pages/PaymentDetails.vue";
import SaveForLater from "./Pages/SaveForLater.vue";
import Category from "./Pages/Category.vue";
import { createRouter, createWebHashHistory } from 'vue-router';
import axios from 'axios';

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/registration",
    component: Registration
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '/categories/add',
    component: AddCategories
  },
  {
    path: '/posts/add',
    component: AddPost
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/order/:id',
    component: Order
  },
  {
    path:'/cart',
    component:AddToCart
  },
  {
    path:'/payment',
    component:PaymentDetails,
  },
  {
    path:'/saveForLater',
    component:SaveForLater,
  },
  {
    path:'/category/:id',
    component:Category,
  },
]
const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

// axios.interceptors.request.use((config) => {
//   let token = getToken();
//   if (token) {
//     //  console.log(token);
//     let params = new URLSearchParams();
//     params.append("auth", token);
//     config.params = params;
//   }
//   return config;
// });

app.use(router)
app.mount('#app')

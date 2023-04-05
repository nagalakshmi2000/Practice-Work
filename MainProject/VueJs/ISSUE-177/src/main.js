import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
axios.defaults.baseURL = 'https://vue-posts-af023-default-rtdb.firebaseio.com/';
createApp(App).mount('#app')

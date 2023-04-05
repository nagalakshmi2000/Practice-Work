<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary  sticky">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="d-flex list-unstyled col-md-4">
          <li class="nav-item active">
            <router-link to="/" class="nav-link text-light"> Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/categories" class="nav-link text-light" v-if="isLoggedIn"> Categories</router-link>
          </li>
          <li class="nav-item active">

            <router-link to="/posts/add" class="nav-link text-light" v-if="isLoggedIn"> AddPost</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/posts" class="nav-link text-light" > Posts</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/registration" class="nav-link text-light" v-if="isLoggedIn"> Registration</router-link>
          </li>
        </ul>
        <div class="col-md-3 py-2 searchBtn">
          <input type="text" class="form-control" placeholder="Search for products" v-model="searchData"
            v-on:keyup.enter="action(this.searchData)">
        </div>
        <div class="col-md-3 py-2 ">
          <div class="float-end">
            <router-link to="/cart" class="nav-link text-light"><span class="pe-1"><i
                  class='fas fa-cart-plus'></i></span>Cart</router-link>
          </div>
        </div>
        <div class="col-md-2">
          <form class="d-flex" v-if="isLoggedIn">
            <a href="/" @click.prevent="onLogout()" class=" btn btn-outline-light" type="submit">Logout</a>
          </form>
          <form class="d-flex ms-5" v-if="!isLoggedIn">
            <router-link to="/login" class="btn btn-outline-light" type="submit">Login</router-link>
          </form>
        </div>
      </div>
    </div>
  
  
  </nav>

</template>

<script>
import axios from 'axios';
import emitter from 'tiny-emitter/instance';
import { isUserAuthenticated } from '../services/LocalStorage';
import { removeDetailsFromLocalStorage } from '../services/LocalStorage';
export default {
  data() {
    return {
      isLoggedIn: false,
      searchData: '',
    }
  },


  mounted() {
    this.isLoggedIn = isUserAuthenticated();
    emitter.on('logged-in-event', (status) => {
      this.isLoggedIn = true;
    }
    )

  },
  methods: {
    action(data) {
      console.log(data)
      emitter.emit("searchDataInPost", data)
    },
    resultData() {
      if (this.searchData) {
        // this.searchData = "a"
        return this.posts.filter((item) => {
          return (this.searchData.toLowerCase().split('').every(v => item.name.toLowerCase().includes(v)))
        })
      }
    },
    onSearch(data) {
      console.log(data);
    },
    onLogout() {
      removeDetailsFromLocalStorage();
      this.isLoggedIn = false;
      emitter.emit('success-message-event', 'user is successfully logged out');
      this.$router.push('/login');
    },
  },
  // mounted() {
  //   axios.get(`https://vue-posts-af023-default-rtdb.firebaseio.com/Posts.json`).then((response) => {
  //     let postsData=response.data;
  //     for (let key in postsData) {
  //       this.posts.push({ ...postsData[key], id: key })
  //     }
  //     console.log(response.data)
  //   })
  // }
}
</script>

<style  scoped>
* {
  box-sizing: border-box;
  margin: 0px;
}

nav.sticky {
  position: sticky;
  top: 0px;
  z-index: 1;
}
@media(max-width:500px){
  

}
</style>
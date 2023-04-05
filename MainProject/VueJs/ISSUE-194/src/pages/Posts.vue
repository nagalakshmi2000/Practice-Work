<template>
  <div class="row">
    <div class="col-md-8 ">
      <h3 class="text-center mt-3"> Post Details</h3>
      <div class="text-end">
        <router-link :to="{ name: 'createPost' }"><button class="btn btn-primary mb-3">Create Post</button></router-link>
        <!-- <PostItem></PostItem> -->
      </div>
      <table class="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in postsData" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.fullName }}</td>
            <td>{{ post.name }}</td>
            <td>
              <router-link :to="`/singlePost/${post.id}`">Show Post Details</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-4">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
// import PostItem from "./pages/PostItem.vue";

import axios from 'axios';
export default {
  data() {
    return {
      postsData: ''
    };
  },
  mounted() {
    axios.get('posts.json').then((response) => {
      // console.log(response.data);
      this.formatPostData(response.data)
    })
  },
  methods: {
    formatPostData(posts) {
      this.postsData = [];
      for (let key in posts) {
        console.log(posts[key]);
        this.postsData.push({ ...posts[key], id: key });
      }

    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('component before route enter');
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('Before route leave')
    next()
  },
  beforeRouteUpdate() {
    console.log('before update')
  },
};
</script>

<style lang="scss" scoped>

</style>
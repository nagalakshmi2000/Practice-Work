<template>
  <div class="text-center">
    <h1>Posts Data</h1>
  </div>
  <div v-if="!posts">
    Loading Post Data
  </div>
  <div>
    <table class="table table-dark table-striped table-bordered table-hover table-responsive" v-if="posts">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

import axios from "axios";

export default {

  data() {
    return {
      posts: ""
    }
  },
  mounted() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      this.posts = response.data;
    });
  }
};
</script>


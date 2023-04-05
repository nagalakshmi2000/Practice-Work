<template>
  <div>Post Data</div>
  <div class="text-end">
    <button>
      <router-link to="/createPost" class="btn btn-primary">Create Post</router-link>
    </button>
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in postsData" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.fullName }}</td>
        <td>{{ post.name }}</td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      postsData: ''
    };
  },
  mounted() {
    axios.get('posts.json').then((response) => {
      console.log(response.data);
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
  }
};
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>Post Component</div>
  <hr />
  <div v-if="!isPostSuccess">Get Data from Server</div>
  <div class="row" v-else>
    <div class="col-md-4" v-for="post in postsData" :key="post.Id">
      <div>Name: {{ post.name }}</div>
      <div>FullName: {{ post.fullName }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      postsData: '',
      isPostSuccess: false
    };

  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      axios.get(`posts.json`).then((response) => {
        console.log(response.data);
        this.formatPostData(response.data);
        this.isPostSuccess = true;
      }).catch(error => {
        this.isPostSuccess = true;
      });
    },
    formatPostData(posts) {
      this.postsData = [];
      for (let key in posts) {
        this.postsData.push({ ...posts[key], id: key });
      }
    }

  }
};


</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <form @submit.prevent="onAddPost">
      <div class="my-2">
        <label for="">Name</label>
        <input type="text" class="form-control" v-model="post.name">
      </div>
      <div class="my-2">
        <label for="">FullName</label>
        <input type="text" class="form-control" v-model="post.fullName">
      </div>
      <div class="my-2">
        <button class="btn btn-success">AddNames</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      post: {
        name: '',
        fullName: ''
      }
    };
  },
  methods: {
    onAddPost() {
      console.log(this.post);
      axios.post(`posts.json`, this.post).then((response) => {
        this.$emit('postAdded', true);
        // console.log(response);
      });

    }
  }

};
</script>

<style  scoped>

</style>
<template>
  <div>
    <div>Create Post Page</div>
    <form>
      <div class="my-2">
        <label for="">Name</label>
        <input type="text" class="form-control" v-model="post.name">
      </div>
      <div class="my-2">
        <label for="">FullName</label>
        <input type="text" class="form-control" v-model="post.fullName">
      </div>
      <div class="my-2">
    <router-link :to="{ name:'createPost'}"><button class="btn btn-danger" @click.prevent="sendData"> Add Post</button></router-link>
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
    sendData(){
      console.log("fg");
      console.log(this.post);
      axios.post('posts.json',this.post).then((response) =>{
        console.log(response);
      });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
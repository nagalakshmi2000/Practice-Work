<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Posts v-if="showPosts"></Posts>
      </div>
      <div class="col-md-12">
        <AddPost @postAdded="onPostAdd()"></AddPost>
      </div>


    </div>

  </div>
</template>
<script>
import Posts from './components/Posts.vue';
import AddPost from './components/AddPost.vue';
export default {
  data() {
    return {
      showPosts: true
    };
  },
  components: {
    Posts,
    AddPost
  },
  methods: {
    onPostAdd() {
      this.showPosts = false;
      setTimeout(() => {
        this.showPosts = true;
      }, 10);
    }
  }

}
</script>
<style lang="">
  
</style>
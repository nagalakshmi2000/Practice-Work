<template>
  <div>PostItems </div>
  <div>Id: {{id}}</div>
  <div>name: {{post.name }}</div>
  <div>fullName: {{post.fullName}}</div>
  <div>
    <router-link :to="{name: 'singlePost', params:{id:'-NGu3zM2z_o0EsueqKQO'}}">Go to Vue Routing Post Details</router-link>
  </div>
  <div>
    <router-link :to="{name: 'singlePost'}" class="btn btn-primary">Go to Posts</router-link>
  </div>
</template>


<script>
import axios from 'axios';

  export default {
    data(){
      return{
        id: '',
        post:""

      };
    },
    // watch:{
    //   $route() {
    //     this.getPostDetails();
    //   }
    // },
    created(){
      this.getPostDetails()
      this.$watch(() => this.$route.params, () => {
        console.log("param Changed");
        this.getPostDetails()
      });
      // console.log(this.$route.params);
      // this.id = this.$route.params.id;
      // axios.get(`posts/${this.id}.json`).then((response) => {
      //   this.post = response.data;

    // });
    },
    methods: {
      getPostDetails() {
      this.id = this.$route.params.id;
      axios.get(`posts/${this.id}.json`).then((response) => {
        this.post = response.data;
      });
      },
    }
    
  };
</script>

<style lang="scss" scoped>

</style>
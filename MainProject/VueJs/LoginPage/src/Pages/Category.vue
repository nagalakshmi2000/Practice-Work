<template>
    <div class="row gap-3 mx-4 mt-3">
      <div @click.prevent="onOrder(post.id)" class="card w-10 col-md-3 mb-4"  v-for="(post) in postsData" :key="post.id">
        <div class="card-body ms-3">
          <div class="card-title ms-5">
            <img :src="post.imageUrl" alt="" class="img-fluid">
          </div>
          <div class="text-center mt-3">
            <h5>{{ post.name }}</h5>
            <div class=" h-15">{{ shortDescription(post.description) }}</div>
            <div class="fs-4 mb-3">₹{{ post.price }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        postsData:[],
        posts:'',
        title:'',
        description:'',
        Price:'',
        imageUrl:'',
      }
    },
    mounted() {
      this.getPost(this.$route.params.id);
    },
    methods: {    
      shortDescription(data) {
      return `${data.slice(0, 20)}....`
    },
    onOrder(id){
      this.$router.push(`/order/${id}`)
    },
    
      getPost(id){
        console.log(id);
      axios.get(`https://vue-posts-af023-default-rtdb.firebaseio.com/Posts.json`).then((response)=>{
      let posts=response.data;
      this.postsData=[];
      for(const key in posts){
      if(id){
        console.log(id)
        if(posts[key].categoryId == id){
          console.log( posts[key]);
          this.postsData.push({
            name:posts[key].name,
            description:posts[key].description,
            price:posts[key].Price,
            imageUrl:posts[key].imageUrl,

            id:key
          })
        }
       
      }
    }
    console.log(this.postsData);
        
      
    })
    }
      
    },
   
  };
</script>

<style  scoped>
.w-10{
  width:23%;
  height:100%;
}

.card-title{
  margin:auto;
  width:60%;
}
 img{
  object-fit:fit;
  height:12em;
  width:100%;  
}
.card{
  width:19em;
  height:23em;
}
.card:hover{
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}
</style>
<template>
  <div class="row d-flex justify-content-between hiding">
    <div class="col-md-4 mb-2">
      <select class="form-select py-2 mt-4 hide" aria-label="Default select example" v-model="selectFilter">
        <option selected>Open this select menu</option>
        <option v-for="category of categories" :value="category.name">{{ category.name }}</option>
      </select>
    </div>
    <div class="col-md-6 d-flex">
      <!-- <p class="mx-3 mt-2">Search</p>
      <input class="form-control"/>  -->
      <input class="form-control mt-4 hide" type="text" v-model="searchData" placeholder="Search" />
    </div>
  </div>
  <div class="container marginFix">
    <!-- <h1>Posts Data</h1> -->
    <div class="row gap-1 ">
      <div @click.prevent="onOrder(post.id)" class="card w-10 col-md-3 mb-1" v-for="(post) in (resultData)"
        :key="post.id">
        <div class="card-body">
          <div class="card-title h-20"><img :src="post.imageUrl" alt="" class="img-fluid"></div>
        </div>
        <div class="text-center mb-4">
          <h4 class="card-title fs-4 change">{{ post.title }}</h4>
          <h6>{{ post.name }}</h6>
          <div class="card-title f-s">{{ shortDescription(post.description) }}</div>
          <div class="card-title fs-5">₹{{ post.Price }}</div>
          <div class="card-title">{{ post.quantity }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import emitter from 'tiny-emitter/instance';

export default {
  data() {
    return {
      posts: [],
      categories: [],
      searchData: '' || '',
      selectFilter: '',
      postError: [],
    }
  },

  computed: {
    
    resultData() {
      // debugger
      if (this.searchData) {
        // this.searchData = "a"
        return this.posts.filter((item) => {
          return (this.searchData.toLowerCase().split('').every(v => item.title.toLowerCase().includes(v)||item.name.toLowerCase().includes(v)));
        })
      }
      if (this.selectFilter) {
        console.log(this.selectFilter)
        return this.posts.filter(item => {
          return this.selectFilter.toLowerCase().split(' ').every(s => item.title.toLowerCase().includes(s)||item.name.toLowerCase().includes(s));
        })
      }
      else {
        return this.posts;
      }
    }
  },
  methods: {
    shortDescription(data) {
      return `${data.slice(0, 10)}....`
    },
    postsData(post) {
      // debugger
      for (let key in post) {
        this.posts.push({ ...post[key], id: key })
      }
    },
    onOrder(id) {
      console.log(id);
      this.$router.push(`/order/${id}`)
    },
    CategoriesData(category) {
      for (let key in category) {
        this.categories.push({ ...category[key], id: key })
      }
      console.log(this.categories);
    },
  },
  mounted() {
    emitter.on("searchDataInPost", (data) => {
      this.searchData = data;
      this.resultData
      console.log("Data", data);

    })

    axios.get(`https://vue-posts-af023-default-rtdb.firebaseio.com/Posts.json`).then((response) => {
      this.postsData(response.data)
      console.log(response.data)

    })
    axios.get('https://vue-posts-af023-default-rtdb.firebaseio.com/categories.json').then((response) => {
      this.CategoriesData(response.data)
      // this.selectCategory(response.data)
      console.log(response.data);
    })
  },
}
</script>

<style  scoped>
.bg-color {
  background-color: aqua;
}
.marginFix{
  margin-left: 22px;
}
.h-20 {
  height: 90%;
}

h4,
.hide {
  display:none;
}

.card-body:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.card img {
  width: 10em;
  height: 15em;
  object-fit: fit;
}

.card-body {
  margin: auto;
  margin-top: 20px;
  width: 70%;
}

.card {
  width: 24%;
}
@media(max-width:500px){
  .card{
    width:46%;
    margin: 0px;   
  }
  .card img{
    height:8em
  }
  .marginFix{
    margin: 0px;
    padding: 0px;
    
  }
 .card-body{
  padding: 0px;
 }
 h6,.f-s{
  font-size: 0.9em;
 }
 .gap-1{
 margin-left: 0px;
 margin-right: 0px;
 }
 .w-10{
  margin-left: 9px;
 }
}

</style>
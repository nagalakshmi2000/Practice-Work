<template>
  <div>
    <div class="row f-w">
      <div class="col">
        <div class="card-group ">
          <div @click.prevent="SingleCategory(CategoryData.id)" v-for="CategoryData in categoryArray ">
            <div class=" d-flex ">
              <div class="card-body ShortImage">
                <img :src="CategoryData.imagesUrl" alt="" class="imageWidth">
              </div>
            </div>
            <p class="text-center changeText">{{ CategoryData.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="col-md-12">
        <div id="demo" class="carousel slide" data-bs-ride="carousel">

          <!-- Indicators/dots -->
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>

          <!-- The slideshow/carousel -->
          <div class="carousel-inner d-flex">
            <div class="carousel-item active ">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/ffce822e711415ed.jpg?q=50"
                class="d-block w-100 h-60 img-fluid " alt="First Slide">
            </div>
            <div class="carousel-item active ">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/1800/1800/image/18b84615942cacfe.jpg?q=80"
                class="d-block w-100 h-60  img-fluid " alt="Second Slide">
            </div>
            <div class="carousel-item active ">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/cf9f708650111c68.jpg?q=50"
                class="d-block w-100  h-60  img-fluid " alt="Third Slide">
            </div>
          </div>

          <!-- Left and right controls/icons -->
          <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark "></span>
          </button>
          <button class="carousel-control-next  " type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark "></span>
          </button>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
  <Posts></Posts>
<!-- 
  <div class="container col-md-3" v-for="post in postArray" @click.prevent="singlePost(post.id)">
    <div class="row mt-3">
      <div class="col">
        <div class="card changePostCard ">
          <div class="card-body changePostImage">
            <img :src="post.imageUrl" alt="" class="img-fluid ">
          </div>
          <div class="text-center m-3">
            <h6>{{ post.name }}</h6>
            <div class="card-title changeTextColor">{{ shortDescription(post.description) }}</div>
            <div class="card-title fs-5">₹{{ post.Price }}</div>
            <div class="card-title">{{ post.quantity }}</div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

</template>

<script>
import axios from 'axios';
import Posts from './Posts.vue';
export default {
  data() {
    return {
      categoryArray: [],
      postArray: [],
      searchData: '' || '',
    }


  },
  components:{
    Posts
  },
  methods: {
    SingleCategory(id) {
      this.$router.push(`/Category/${id}`)
    },
    BeautyCategory(id) {
      this.$router.push(`/beauty/${id}`)
    },
    // shortDescription(data) {
    //   return `${data.slice(0, 50)}....`
    // },
    singlePost(id) {
      console.log(id)
      this.$router.push(`/order/${id}`)
    }
  },
  mounted() {
    axios.get('https://vue-posts-af023-default-rtdb.firebaseio.com/categories.json').then((response) => {
      let CategoryData = response.data;
      console.log(CategoryData);
      for (let key in CategoryData)
        this.categoryArray.push({ ...CategoryData[key], id: key })
    })
    axios.get(`https://vue-posts-af023-default-rtdb.firebaseio.com/Posts.json`).then((response) => {
      console.log(response.data);
      let postData = response.data;
      for (let key in postData)
        this.postArray.push({ ...postData[key], id: key })
      console.log(this.postArray);
    })
  },
};
</script>

<style  scoped>
.container-fluid {
  padding: 0;
  margin: 0;
}

h-60 img {
  height: 40%;
}

.bg-color {
  background-color: aqua;
}

.change {
  color: #212121;
}
.f-w{
  margin-left: 10px;
}
.ShortImage img {
  object-fit: fit;
  width: 90px;
  height: 100px
}

.carousel-item img {
  width: 100px;
  height: 400px
}

.changePostCard {
  width: 20em;
  height: 25em
}

.changePostImage img {
  width: 9em;
  height: 14em
}

.card-body {
  margin: auto;
}

.changeTextColor:hover {
  color: cornflowerblue;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

@media(max-width:500px){
  *{
    padding:0px;
    margin: 0px;
  }
  .card-group{
    display: flex;
    flex-wrap: wrap;
  }
  .ShortImage img{
    width:50px;
    height:50px;
  }
 
  .card-group{
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
  }
  .carousel-item img{
    height:12em
  }
 
  .changeText{
    font-size: 10px;
    width:70px;
    margin-bottom: 15px;
  }
  .carousel-inner .carousel-item {
    transition: -webkit-transform 0.1s ease;
    transition: transform 0.1s ease;
    transition: transform 0.1s ease, -webkit-transform 0.1s ease;
  }
  .imageWidth{
    margin-left: 10px;
  }
}
@media(min-width: 420px) and (max-width:500px){
  .ShortImage img{
    width:80px;
    height:70px;
  }
  .imageWidth{
    margin-left: 0px;
  }
}
</style>
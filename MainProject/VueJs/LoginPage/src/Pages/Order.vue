<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-5 ">
        <div class="card m-3">
          <img :src="PostData.imageUrl" alt="" class="img-fluid w-10">
        </div>
      </div>
      <div class="col-lg-6 m-20">
        <h4 class="change fs-4 pb-3 ">{{ PostData.title }}</h4>
        <h3> {{ PostData.name }}</h3>
        <div class="card-title pb-3">{{ PostData.description }}</div>
        <div class="card-title fs-5 pb-3">₹:{{ PostData.Price }}</div>
        <button @click.prevent="AddCart()" class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      PostData: '',
      postId: ''

    }
  },
  mounted() {
    this.getPosts(this.$route.params.id);
    this.postId = this.$route.params.id;
  },
  methods: {
    getPosts(id) {
      console.log(id);
      axios.get(`https://vue-posts-af023-default-rtdb.firebaseio.com/Posts/${id}.json`).then((response) => {
        console.log(response.data);
        this.PostData = response.data;
      },
      )

    },

    AddCart() {
      // console.log("ggggg", this.PostData);
      axios.get(`https://vue-posts-af023-default-rtdb.firebaseio.com/AddCart.json`).then((response) => {
        let data = response.data;
        // console.log(data);
        let check = true;
        if (data != null) {
          // console.log(Object.keys(data).length);
          for (let index = 0; index < Object.keys(data).length; index++) {
            const element = data[index];
            console.log(data[Object.keys(data)[index]].postId);
            if (data[Object.keys(data)[index]].postId == this.postId) {
              check = false;
              alert("Item is already exist");
              return;
            }
          }

          if (check) {
            axios.post(`https://vue-posts-af023-default-rtdb.firebaseio.com/AddCart.json`, { ...this.PostData, postId: this.postId }).then(() => {
              console.log(check);
              check = true;
              this.$router.push(`/cart`)
            })
          }

        }
        if (data == null) {
          axios.post(`https://vue-posts-af023-default-rtdb.firebaseio.com/AddCart.json`, { ...this.PostData, postId: this.postId }).then(() => {
            this.$router.push(`/cart`)
          })
        }
      })


    },
  }
};


</script>

<style  scoped>
.change {
  color: #212121;
}
.m-20{
  margin-left: 1.2em;
}
h4 {
  display:none;
}
.card{
  margin-left: auto;
}
.card img {
  width: 20rem;
  height: 28em;
  object-fit: fit;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2em;
  padding-bottom: 2em;
}
@media (max-width:500px){
  .card img{
    width:15em;
    height:15em
  }
}
</style>
<template>
  <div class="container postChange">
  <h1 class="mt-3">Add Posts</h1>
    <form @submit.prevent="onAddPost()">
      <div class="my-3 col-md-12">
        <label>Image</label>
        <input type="text" class="form-control" v-model="imageUrl" />
        <div class="error">
          {{ PostErrors.imageUrl }}
        </div>
      </div>
      <div class="my-3 col-md-12">
        <label>Title</label>
        <input type="text" class="form-control" v-model="title" />
        <div class="error">
          {{ PostErrors.title }}
        </div>
      </div>
      <div>
        <label>Description</label>
        <input type="text" class="form-control" v-model="description" />
      </div>
      <div class="error">
        {{ PostErrors.description }}
      </div>
      <div>
      <label>Product Name</label>
      <input type="text" class="form-control" v-model="name"/>
      </div>
      <div>
        <label>Price</label>
        <input type="text" class="form-control" v-model="Price" />
        <div class="error">
          {{ PostErrors.Price}}
        </div>
      </div>
      <div class="my-3 col-md-12">
        <label>Select Category</label>

      <select class="form-select" aria-label="Default select example" v-model="categoryId">
          <option value="">Select Category</option>
          <option :value="category.id" v-for="category in categoriesArray" :key="category.id">{{ category.name }}
          </option>
        </select>
        <div class="error">
          {{ PostErrors.categoryId }}
        </div>
      </div>
      <div class="my-3 col-md-6">
        <button class="btn btn-primary">AddPost</button>
      </div>
    </form>
  </div>
</template>
<script>
import AddPostValidations from '../services/AddPostValidations';
import axios from 'axios';

export default {
  data() {
    return {
      imageUrl: '',
      title: '',
      name: '',
      description: '',
      Price: '',
      categoryId: '',
      categoriesArray: [],
      PostErrors: [],
      
    }
  },
  methods: {
    onAddPost() {
      let Validations = new AddPostValidations(
        this.Price,
        this.description,
        this.title,
        this.categoryId,
        this.imageUrl,
      );
      // console.log('Validations');
      this.PostErrors = Validations.checkValidations();
      if (Object.keys(this.PostErrors).length) {
        return false
      }
      axios.post(`https://vue-posts-af023-default-rtdb.firebaseio.com/Posts.json`, {
        imageUrl: this.imageUrl,
        title: this.title,
        description: this.description,
        Price: this.Price,
        categoryId: this.categoryId,
        name: this.name,
      })
      .then((response) => {
        this.$router.push('/Posts');
      });

    }


  },
  mounted() {
    axios.get(`https://vue-posts-af023-default-rtdb.firebaseio.com/categories.json`).then((response) => {
      let categoriesData = response.data;
      // console.log(response);
      for (let key in categoriesData)
        this.categoriesArray.push({ ...categoriesData[key], id: key })
    })
  }
}
</script>
<style>
.postChange{
  width:50%;
}
</style>
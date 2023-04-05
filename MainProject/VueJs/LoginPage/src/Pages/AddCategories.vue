<template>
  <div> Add Categories</div>
  <div>
    <form @submit.prevent="onAddCategory()">
      <div class="my-3">
      <label>Category Name</label>
      <input type="text" class="form-control" v-model="name"/>
    </div>
    <div class="my-3">
      <label>Category imageUrl</label>
      <input type="text" class="form-control" v-model="imagesUrl"/>
    </div>
    <div class="my-3">
      <button class="btn btn-primary">Add Category</button>
    </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default{
  data() {
    return {
      name:'',
      imagesUrl:'',
    }
  },
  methods: {
    onAddCategory() {
      axios.post('https://vue-posts-af023-default-rtdb.firebaseio.com/categories.json',{
        name:this.name,
        imagesUrl:this.imagesUrl,

      })
      .then((response) => {
        this.$router.push('/categories');
      });

    }
  },
}
</script>
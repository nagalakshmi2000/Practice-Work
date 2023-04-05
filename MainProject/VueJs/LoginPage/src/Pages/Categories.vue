<template>
  <div class="container mt-5 center">
  <!-- <div><router-link to="/categories/add">Add Categories</router-link></div> -->
  <div><button class="btn btn-light fw-bold"><router-link to="/categories/add">Add Categories</router-link></button></div>
  <div>
    <form>
      <div class="my-3 col-md-12">
      <label>Category Name</label>
      <input type="text" class="form-control" v-model="name"/>
    </div>
    </form>
  </div>

  <table class="table w-10">
    <thead>
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Title</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr  scope="row" v-for="(category, index) in categories" :key="category.id">
        <td>{{ index + 1 }}</td>
        <td>{{ category.name }}</td>
        <td><button class="btn btn-primary" @click.prevent="onEdit(categories.id)">Edit</button><button class="btn btn-primary mx-3"
            @click.prevent="onDelete(category.id)">Delete</button></td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      categories: [],
      name:'',
     
    }
  },
  methods: {
    getData(){
      axios.get(`https://vue-posts-af023-default-rtdb.firebaseio.com/categories.json`).then((response) => {
      console.log(response.data);
      this.categoriesData(response.data)
    }).catch((error)=>
    {
      console.log(error);
    })
    },
    categoriesData(categories) {
      for (let key in categories) {
        this.categories.push({ ...categories[key], id: key })
      }
    },
    onEdit(id) {
      
    },
    onDelete(id){
      console.log(id);
      axios.delete(`https://vue-posts-af023-default-rtdb.firebaseio.com/categories/${id}.json`).then((response =>{
        console.log(id);
        this.categories=[]

        this.getData()
        this.categoriesData(response.data)
      }
      ))
      
      
    }
   
  },
  mounted() {
    this.getData()
    
  }
};





</script>
<style>
.w-10{
  width:100%;
}
.center{
  margin:auto;
  width:50%;
}
</style>
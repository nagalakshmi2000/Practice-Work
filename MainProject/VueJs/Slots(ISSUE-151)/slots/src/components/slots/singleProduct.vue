<template>
  <div class="card-group">
    <div class="card shadow  bg-white rounded mb-3" style="width: 20rem;height:25rem">
      <img  :src=Product.thumbnail  class="card-img-top" alt="..." style="width: 19.9rem;height:10rem">
      <div class="card-body">
        <h5 class="card-title">{{ Product.title }}</h5>
         <div>By {{fullName}}</div> 
        <p class="card-text">{{ Product.description }}</p>
        <p class="card-text f-bold">{{ Product.price }}</p>
        <a href="#" class="btn btn-primary ">Order </a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  inject:['fullName'],
  data() {
    return {

    }
  },
  props: {
    Product: {
      type: Object,
    },
    name:{
      type: String
    }
  },
  };
</script>

<style>

</style>
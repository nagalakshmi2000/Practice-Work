<template>
  <div class="card" style="width: 19rem;">
    <img class="card-img-top" :src="product.image" alt="Card image cap">
    <div class="card-body">
      <h2 class="card-text">{{product.productName}}</h2>
      <h5 class="card-title">{{product.price}}</h5>
      <p class="card-text">{{product.description}}</p>
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return {
      
    }
  },
  props:{
    product:Object
  }

};
</script>
<style>
</style>

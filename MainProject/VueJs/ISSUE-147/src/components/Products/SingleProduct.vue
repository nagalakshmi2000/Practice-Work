<template>

  <div class="card card1">
    <img class="card-img-top img" :src="product.image" alt="Card image cap">
    <div class="card-body">
      <h2 class="card-text">{{ product.productName }}</h2>
      <h5 class="card-title">{{ product.price }}</h5>
      <p class="card-text">{{ product.description }}</p>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
    product: Object
  }
}
</script>
<style>
.card1 {
  width: 25%;
}

.img {
  height: 60%;

}
</style>
<template>
  <div>
    <h2>Products Data</h2>
    <div class="d-flex justify-content-between ">
      <singleProduct  v-for="product in products" :key="product.title" :product="product" ></singleProduct>
    </div>
  </div>
</template>
<script>
import SingleProduct from "./SingleProduct.vue"
export default {
  data() {
    return {
      products: [{
        productName: 'i phone',
        description: 'An apple mobile which is nothing like apple',
        price: '549',
        image: "https://dummyjson.com/image/i/products/1/1.jpg"
      },
      {
        productName: 'iphone x',
        description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology  A12 Bionic chip', price: '889',
        image: "https://dummyjson.com/image/i/products/8/4.jpg"
      },

      {
        productName: 'i phone',
        description: 'An apple mobile which is nothing like apple',
        price: '549',
        image: "https://dummyjson.com/image/i/products/1/1.jpg"
      },
      {
        productName: 'iphone x',
        description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology  A12 Bionic chip', price: '889',
        image: "https://dummyjson.com/image/i/products/8/4.jpg"
      }
      ]
    }
     
  },
  components: {
      SingleProduct
    }
};
</script>
<style>

</style>
<template>
  <div class="d-flex flex-wrap">
    <single-product v-for="product in item" :key="product.title" :product="product"></single-product>
  </div>
  <!-- <SingleProduct></SingleProduct> -->
</template>
<script>
import SingleProduct from './SingleProduct.vue';
export default {
  data() {
    return {

    }

  },
  components: {
    SingleProduct
  },
  props: {
    item: Array
  }
};
</script>
<style>

</style>

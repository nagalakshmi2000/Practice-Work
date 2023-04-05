<template>
  <products-list></products-list>
  <div class="text-center bg-primary fs-4">Products</div>
  <div class=" col-md-3 m-5">
    <label for="" class="fs-5">Title</label>
    <input type="text" class="form-control" v-model="addItems.productName">
    <label for="">Description</label>
    <input type="text" class="form-control" v-model="addItems.description">
    <label for="">Price</label>
    <input type="text" class="form-control" v-model="addItems.price">
    <label for="">Image</label>
    <input type="" class="form-control" v-model="addItems.image">
    <button class="mt-3 btn btn-success" @click.prevent="onAddProduct()">Add Item</button>
  </div>
  <div>
    <h1>ProductData</h1>
  </div>
</template>
<script >
import ProductsList from './ProductsList.vue';
export default {
  data() {
    return {
      addItems: {
        productName: "",
        description: "",
        price: "",
        image: ""
      }
    }
  },
  methods: {
    onAddProduct() {
      this.$emit("sendData", this.addItems);
    }
  },
  components: { ProductsList }
};
</script>
<style>

</style>
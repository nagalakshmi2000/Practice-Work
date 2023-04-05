<template>
  <navigation></navigation>
  <div class="container">
    <div class="row">
      <div class=" col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>


</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
  components: {
    Navigation
  }
};
</script>

<style scoped>

</style>
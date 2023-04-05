<template lang="">
  <div>
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>
<script>
import Navigation from './components/Navigation.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    Navigation
  }

}
</script>
<style lang="">
  
</style>

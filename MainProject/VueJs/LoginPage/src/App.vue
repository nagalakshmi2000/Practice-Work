<template>
<Navigation>

</Navigation>
<loader></loader>
<div class="container-fluid">
  <div class="row">
    <div>
      <messages></messages>
    </div>
    <router-view></router-view>
  </div>
</div>
 


</template>

<script>
import Navigation from './components/Navigation.vue';
import Messages from './components/Messages.vue';
import Loader from './components/Loader.vue';

export default {
  data() {
    return {

    }
  },
  components: {
  Navigation,
  Messages,
  Loader
}

}; 


</script>

<style lang="scss" scoped>

</style>
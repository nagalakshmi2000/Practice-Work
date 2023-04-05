<template lang="">
  <div class="text-center mt-5">
  <!-- <transition name="button" mode="out-in"> -->
    <transition name="button">
    <button  class="btn btn-danger" v-if="showOnButton" @click.prevent="showButton">ON</button>
    <button  class="btn btn-success" v-else @click.prevent="showButton">OFF</button>
  </transition>
</div>
</template>
<script>
export default {
  data() {
    return {
      showOnButton: false,
    }
  },
  methods: {
    showButton() {
      this.showOnButton = !this.showOnButton;
    }
  }

};
</script>
<style scoped>
.button-enter-from,
.button-leave-to {
  opacity: 0;
  background-color: aliceblue;
  transform: translateX(-30px);

}

.button-enter-to,
.button-leave-from {
  opacity: 1;
  transform: translateX(0px);

}

.button-enter-active,
.button-leave-active {
  transition: all 1s ease-out;
}
</style>
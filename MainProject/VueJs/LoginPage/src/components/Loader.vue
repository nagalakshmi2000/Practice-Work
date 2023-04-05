<template>
  <div v-if="showLoading">
  <div class="backdrop">
    <div class="loader">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>Loading....</div>
    </div>
  </div>
</div>
</template>
<script>
import emitter from 'tiny-emitter/instance';

export default {
  data() {
    return {
      showLoading: false
    }

  },
  mounted() {
    emitter.on('show-loading', (load) => {
      this.showLoading = load;
      setTimeout(() => {
        this.showLoading = '';
      }, 1000);
    });
  }
};
</script>
<style scoped>
.loader {
  width: 40vw;
  height: 20vh;
  top: 80vh;
  left: 30vw;
  position: fixed;
  z-index: 5;
  background-color: red;
  text-align: center;
}

.backdrop {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 20;
  background: rgba(0, 0, 0, 0.2);
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
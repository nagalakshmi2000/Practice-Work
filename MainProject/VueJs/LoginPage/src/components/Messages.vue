<template>
  <div>
    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
    <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance';
export default {
  data() {
    return {
      successMessage: '',
      errorMessage: ''
    };
  },
  mounted() {
    emitter.on('error-message-event', (message) => {
      this.errorMessage = message;
      setTimeout(() => {
        this.errorMessage = '';
      }, 1000);
    });
    emitter.on('success-message-event', (message) => {
      this.successMessage = message;
      setTimeout(() => {
        this.successMessage = '';
      }, 1000);
    });
  }
};
</script>

<style lang="scss" scoped>

</style>
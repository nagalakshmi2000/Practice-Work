<script>
export default {
  methods: {
    onAboutClick() {
      this.$router.push({ path: '/contact', query: { id: 1 } });
    }
  }

};
</script>
<template>
  <div>Home Page</div>
  <div>
    <button @click.prevent="onAboutClick">Go to Contact page</button>
  </div>

</template>
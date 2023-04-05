<template>
  <div class="container">
      <ul class="list-group">
          <li v-for="(item) in hobby" :key=" item " class="list-group-item">
             <slot :item="item"></slot>
          </li>
      </ul>
  </div>

</template>

<script>
export default {
  data() {
      return {
          hobby: ["cricket", "game", "cheese", "football"]
      }
  },
}
</script>

<style scoped>

</style>
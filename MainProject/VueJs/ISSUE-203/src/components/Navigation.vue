<template lang="">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <!-- <a class="nav-link" href="#">Animate <span class="sr-only"></span></a> -->
        <router-link to="/" class="nav-link">Animate</router-link>
      </li>
      <li class="nav-item">
        <!-- <a class="nav-link" href="#">Number</a> -->
        <router-link to="/number" class="nav-link">Number</router-link>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="">
  
</style>
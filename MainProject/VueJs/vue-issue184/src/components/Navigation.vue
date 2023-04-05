<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
              <!-- <a class="nav-link active" aria-current="page" href="/">Home</a> -->
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
              <!-- <a class="nav-link" href="/contact">Contact</a> -->
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>

              <!-- <a class="nav-link" href="/about">About</a> -->
            </li>
            <li class="nav-item">
              <router-link to="/post" class="nav-link">Posts</router-link>

              <!-- <a class="nav-link" href="/about">About</a> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

};
</script>

<style  scoped>
.router-link-active {
  background: red;
}
</style>
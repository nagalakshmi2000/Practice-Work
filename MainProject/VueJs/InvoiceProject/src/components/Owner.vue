<template>
  <div class="text-center">
    <h2>INVOICE GENERATOR</h2>
  </div>
  <div class="d-flex justify-content-between">
    <div>
      <CustomerDetails></CustomerDetails>
    </div>
    <div class="me-4">
      <div>
        <p class="fw-bolder"> Bill From:</p>
        <p><span class="fw-normal">Street Address : </span> <span class="fw-light"> 123 Near Siva Temple</span></p>
        <p><span class="fw-normal">Zip Code : </span><span class="fw-light">522617</span></p>
        <p><span class="fw-normal">City : </span><span class="fw-light">Hyderabad</span></p>
        <p class="mb-5"><span class="fw-normal">Country<span class="fw-light"></span> : India</span></p>
        <span class="me-3">Date:</span><input type="date" v-model="date">
        <span>{{time}}</span>
      </div>
    </div>

  </div>

</template>

<script>
import CustomerDetails from './CustomerDetails.vue';

export default {
  data() {
    return {
      date: null,
      time:null,
    }
  },
  components: { CustomerDetails }
}
</script>

<style  scoped>

</style>
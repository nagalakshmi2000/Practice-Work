<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Billing details</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="row mb-4 ">
              <div class="col d-flex gap-1">
                <div class="form-outline col-md-6">
                  <input type="text"  id="form6Example1" class="form-control" placeholder="First Name"/>
                  <!-- <label for="form6Example1" class="form-label">First Name</label> -->
                </div>
                <div class=" col-md-6">
                  <input type="text" class="form-control" placeholder="Last Name">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="text" class="form-control mb-3" placeholder="Company Name">
                <input type="text" class="form-control mb-3" placeholder="Email">
                <input type="text" class="form-control mb-3" placeholder="Phone">
                <input type="text" class="form-control mb-3" placeholder="Address">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <hr>
              </div>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="" id="" >
                <label for="" class="ms-3">Shipping address is the same as my billing address</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="" id="" >
                <label for="" class="ms-3">Save this information for next time</label>
            </div>
            <div class="row">
              <div class="col">
                <hr>
              </div>
            </div>
            <h4>Payment</h4>
            <div class="form-check">
              <input  class="form-check-input" type="radio" >
              <label for="">Credit Card</label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" type="radio" >
              <label for="">Debit Card</label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" type="radio" >
              <label for="">Paypal</label>
            </div>
            <div class="row mt-3">
              <div class="col-md-12 d-flex gap-3 ">
                <input type="text" class="form-control" placeholder="Name on card">
                <input type="text" class="form-control" placeholder="Credit card number">
              </div>
            </div>
            <div class="row my-4">
              <div class="col-md-6 d-flex gap-3" >
              <input type="text" class="form-control" placeholder="Expiration">
              <input type="text" class="form-control" placeholder="CVV">
            </div>
            </div>
            <button class="btn btn-primary col-md-12">CONTINUE TO CHECKOUT</button>
          </form>

        </div>
      </div>
    
    </div>
  </div>
</div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>
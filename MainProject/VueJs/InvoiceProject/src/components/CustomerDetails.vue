<template>
  <p ><span class="ms-4 fw-bold">Bill To:</span></p>
  <form class="col-md-12 ms-4">
    <div>
      <label for="customerName" class="form-label">Customer Name</label>
      <input type="text"  v-model="customerName">
    </div>
    <div class="error mb-2">
      {{ CustomerError.customerName }}
    </div>
    <div>
      <label for="email" class="form-label">Email</label>
      <input type="text"  v-model="email">
    </div>
    <div class="error mb-2">
      {{ CustomerError.email }}
    </div>
    <div>
      <label for="streetAddress" class="form-label">Street Address</label>
      <input type="text" v-model="streetAddress">
    </div>
    <div class="error mb-2">
      {{ CustomerError.streetAddress }}
    </div>
      <div>
        <label for="country" class="form-label">Country</label>
        <input type=""  v-model="country">
        <div class="error mb-2">
          {{ CustomerError.country }}
        </div>
      </div>
      <div>
        <label for="country" class="form-label">City</label>
        <input type="text"  v-model="city">
        <div class="error mb-3">
          {{ CustomerError.city }}
        </div>
      </div>
      <div>
        <label for="country" class="form-label">ZipCode</label>
        <input type="text"  v-model="zipCode">
        <div class="error mb-2">
          {{ CustomerError.zipCode }}
        </div>
      </div>
  </form>
</template>

<script>
import emitter from 'tiny-emitter/instance';
import axios from 'axios';
import CustomerValidations from '../services/CustomerValidations';
export default {
  data() {
    return {
      customerName: '',
      email: '',
      streetAddress: '',
      country: '',
      city: '',
      zipCode: '',
      // time: '',
      // date: '',
      CustomerError:[],
    }
  },
  mounted() {
    emitter.on('customerDetails',(e) =>{
      this.onSubmit()
    }) 
  },
  methods: {   
    clearData(){
      this.customerName='';
      this.email='';
      this.streetAddress='';
      this.country ='';
      this.city ='';
      this.zipCode='';
    },   
    onSubmit() {
      let Validations = new CustomerValidations(
        this.customerName,
        this.email,
        this.streetAddress,
        this.country,
        this.city,
        this.zipCode,
      );
      // console.log("ytcffffffffffff");
      this.CustomerError = Validations.checkValidations();
      console.log(this.CustomerError);
      if(Object.keys(this.CustomerError).length){
        return false
      }
      axios.post(`https://invoice-generator-4d148-default-rtdb.firebaseio.com/CustomerDetails.json`, {
        customerName: this.customerName,
        email:this.email,
        streetAddress:this.streetAddress,
        country: this.country,
        city:this.city,
        zipCode:this.zipCode,
      }).then(res=>{
       this.clearData();
      })
    },
  },


}
</script>

<style scoped>
.error{
  color:red;
  margin-left:10em;
}
label{
  width:10em;
}
.border{
  border-radius: 10px;
}
</style>
<template>
  <fancy-button :name="'user'">
    <h2>User Name</h2>
  </fancy-button>
  <fancy-button :name="'email'">
  <h2>Email</h2>
  </fancy-button>
  <fancy-button :name="'password'">
    <template #main>
      <h2>Password</h2>
    </template>
  </fancy-button>
  <Products ></Products>
</template>
<script>
import fancyButton from './components/slots/fancyButton.vue';
import Products from './components/slots/Products.vue';
export default{
data(){
  return{
 name:"Lakshmi"
  };
},
components:{
  fancyButton,
  Products
},
provide() {
return{
  fullName: this.name
};
}
}
</script>
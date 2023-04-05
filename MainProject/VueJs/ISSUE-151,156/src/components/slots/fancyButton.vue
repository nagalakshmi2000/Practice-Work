<template>
  <div class="mt-3">
     <slot></slot> 
     <slot name="main"></slot>
    <a href="" class="btn btn-success">
      {{name}}</a>
  </div>
</template>
<script>
export default{
  data(){
    return{

    }
  },
   props:['name']

};
</script>





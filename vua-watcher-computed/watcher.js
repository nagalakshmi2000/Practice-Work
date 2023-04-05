const app = Vue.createApp({
  data() {
    return {
      fName:"",
      lName:"",
      zipCode:"",
      firstName:"",
      lastName:"",
      country:"",
      fullData:"",
      addMessage:"",
    }
  },
  watch:{
    fName(){
     this.fullData = this.fName + this.lName;
    },
    lName(){
      this.fullData = this.fName + this.lName;
    },
    
  },
  computed:{
    fullName(){
      console.log('ccc');
      return this.fName + " " + this.lName;
    },
    fullNameData(){
      console.log("run");
      return this.firstName+ " " + this.lastName;
    },
    
  },
  methods: {
    fullNames(){
      // debugger
      console.log('abc');
      return this.fName + " " + this.lName;
    },
    // fullNameData(){
    //   console.log("executing");
    //   return this.firstName+ " " + this.lastName;
    // }
    onAdd(){
      console.log(this.$refs.nameMessage.value);
      this.addMessage=this.$refs.nameMessage.value;
    }
  },
 
})
app.mount('#app')
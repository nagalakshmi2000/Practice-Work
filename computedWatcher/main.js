const app = Vue.createApp({
  data() {
    return {
      isLoggedIn: true,
      userLoggedIn:true,
      watcherMessage: '',
    }
  },
  watch: {
    isLoggedIn(){
      this.getMsg();
    } ,
    userLoggedIn(){
      this.getMsg();
    }

  },
  computed: {
    computedMsg() {
      return this.isLoggedIn && this.userLoggedIn ? 'computed Login' : 'computed No';
    }
  },
  methods:{
    getMsg(){
      if (this.isLoggedIn) {
        this.watcherMessage = 'Watcher Login';
      }
      else {
        this.watcherMessage = 'Watcher No';
      }
    }
  }
})
app.mount('#app')
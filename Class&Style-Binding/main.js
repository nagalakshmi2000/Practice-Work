const app =Vue.createApp({
  data() {
    return {
      isActive:'true',
    }
  },
  methods: {
    change(){
      return this.isActive = ! this.isActive;
    }
  },
})
app.mount('#app')
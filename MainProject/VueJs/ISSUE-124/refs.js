const app = Vue.createApp({
  data() {
    return {
      textMessage:'',
    };
  },
  methods: {
    onAddMessageClick() {
      this.textMessage = this.$refs.nameText.value;
    }
  },
})
app.mount("#app");


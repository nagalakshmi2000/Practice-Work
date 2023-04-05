const app = Vue.createApp({
  data() {
    return {
      textMessage: 'Hi',
    }
  },
  beforeCreate() {
    console.log("before created");
    console.log(this.textMessage);
  },
  created() {
    console.log('created');
    console.log(this.textMessage);
  },
  beforeMount() {
    console.log('before mount');
    console.log(this.textMessage);
  },
  mounted() {
    console.log('mounted');
    console.log(this.textMessage);
  },
  beforeUpdate() {
    console.log('before update');
  },
  updated() {
    console.log('updated');
  },
  unmounted() {
    console.log('unmounted');
  },

  methods: {
    onAddMessageClick() {
      console.log((this.$refs.nameText.style.borderColor = 'red'));
      this.textMessage = this.$refs.nameText.value;
    },
  },

});
app.mount("#app");
setTimeout(() => {
  app.unmount();
}, 10000)
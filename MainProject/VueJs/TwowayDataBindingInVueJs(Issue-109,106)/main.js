const app = Vue.createApp({
  data() {
    return {
      vModelFirstName: '',
      vModelLastName: '',
      withoutVModelFirstName: '',
      withoutVModelLastName: '',
    }
  },
  computed: {
    VModelFullName() {
      return this.vModelFirstName + " " + this.vModelLastName;
    },
  },
  methods: {
    withoutVModelFullName() {
      return this.withoutVModelFirstName + " " + this.withoutVModelLastName;
    },
    onNameChangeFirst(event) {
      this.withoutVModelFirstName = event.target.value;
    },
    onNameChangeLast(event) {
      this.withoutVModelLastName = event.target.value;
    },
  }
});
app.mount('#app');



const app = Vue.createApp({
});

app.component("text-component", {
  template: `
  <h2 class="mx-3 my-3 badge bg-primary px-3 fs-4 rounded-circle">{{count}}</h2>
        <p class="mx-3  text-danger" v-show= "count==0" v-if="show">Counter should not less than zero</p>
        <p><button class="mx-3 text-dark btn btn-outline-success"   @click="countIncrement()">
            Increment
        </button>
        <button class="mx-3 btn btn-outline-warning" @click="countDecrement()">Decrement</button></p>`,
  data() {
    return {
      count: 0,
      show: false
    }
  },
  methods: {
    countDecrement() {
      this.show = true;
      if (this.count > 0) {
        this.count--;
      }
    },
    countIncrement() {
      this.show = true;
      this.count++;
    },
  }
})
app.mount('#app')
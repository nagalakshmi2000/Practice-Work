<template lang="">
  <div>
    <transition-group tag="div" name="list">
  <li class="mx-2" v-for="number in numbers" :key="number">{{number}}</li>
</transition-group>
  <div class="my-3">
  <button @click.prevent="onAdd()" class="">Add</button>
  <button @click.prevent="onRemove">Remove</button>
  <button @click.prevent="onShuffle">shuffle</button>
</div>
</div>
</template>
<script>
import shuffle from 'lodash.shuffle';
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    onAdd() {
      this.numbers.push(this.nextNum);
      this.nextNum++;
    },
    onRemove() {
      let randomIndex = Math.floor(Math.random() * this.numbers.length);
      this.numbers = this.numbers.filter((number) => number !== this.numbers[randomIndex]);
    },
    onShuffle() {
      // this.numbers.reverse();
      this.numbers = shuffle(this.numbers)
    }
  }
};
</script>
<style scoped>
.list-move,
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transition: all 0.5s;

}

.list-enter-to,
.list-leave-from {

  opacity: 0;
  transform: translateX(30px);
}

.list-enter-active,
.list-leave-active {
 position:absolute;
}
</style>
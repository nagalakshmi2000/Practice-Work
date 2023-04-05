<template>
  <div class="box my-3 mx-3" :class="{ animate: animate }"> </div>
  <button @click.prevent="onShow()" class="btn btn-success my-3 mx-3">Click Here</button>
  <div class="mt-5 ">
    <transition>
      <div v-if="showText">Text</div>
    </transition>
    <button class="btn btn-primary" @click.prevent="onToggle()">Toggle</button>
  </div>
  <DialogueBox :open="ShowDialogueBox">
    <div>Hello</div>
    <button class="btn btn-primary" @click.prevent="showBox">ClickMe</button>
  </DialogueBox>

  <div class="my-3">
    <button @click.prevent="showBox()" class="btn btn-primary">ShowDialogueBox</button>
  </div>
</template>
<script>
import DialogueBox from './components/DialogueBox.vue';
export default {
  data() {
    return {
      animate: false,
      showText: false,
      ShowDialogueBox: false,

    }
  },
  methods: {
    onShow() {
      this.animate = true;
    },
    onToggle() {
      this.showText = !this.showText;
    },
    showBox() {
      this.ShowDialogueBox = !this.ShowDialogueBox;
    }
  },
  components: {
    DialogueBox
  }
};
</script>
<style scoped>
.box {
  height: 100px;
  width: 100px;
  background-color: brown;
  /* transition:all 1s; */
}

.box2 {
  height: 100px;
  width: 100px;
  background-color: royalblue;
  transition: width 2s, height 2s;
}

.box2:hover {
  width: 300px;
  height: 300px;
}



.animate {
  animation: animate 5s
}

@keyframes animate {
  0% {
    transform: translate(0px);
  }

  30% {
    transform: translateX(100px);
    background-color: darkblue;
  }

  70% {
    transform: translateX(200px);
    background-color: darkgreen;
  }

  100% {
    transform: translateX(300px);
    background-color: rgb(64, 4, 44);
  }
}

.shake {
  animation: shake 0.5s;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {

  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.v-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

.v-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.v-enter-active {
  transition: all 1s;

}

.v-leave-from {
  transform: translateY(0px);
  opacity: 0;
}

.v-leave-to {
  transform: translateY(-30px);
  opacity: 1;
}

.v-leave-active {
  transition: all 1s;
}
</style>

<style scoped>
.box {
  width: 150px;
  height: 180px;
  background: pink;
}

.animate {
  animation: animate 5s
}

@keyframes animate {
  0% {
    transform: translate(0px);
  }

  30% {
    transform: translateX(100px);
    background-color: rgb(210, 10, 10);
  }

  70% {
    transform: translateX(200px);
    background-color: darkgreen;
  }

  100% {
    transform: translateX(300px);
    background-color: rgb(149, 135, 144);
  }
}
</style>
<template>
  <div>
    <transition name="DialogueBox">
      <div class="DialogueBox" v-if="open"></div>
    </transition>
    <transition>
      <div class="displayBox" v-if="open">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ['open']
};
</script>
<style scoped>
.DialogueBox {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgb(166, 170, 170);
}

.displayBox {
  background-color: aliceblue;
  width: 60vw;
  position: fixed;
  height: 20vh;
  top: 20vh;
  left: 20vw;
  padding: 10px;

}

.v-enter-from,
.v-leave-to {
  transform: translateY(-300px);
}

.v-enter-to,
.v-leave-from {
  transform: translateY(0px);
}

.v-enter-active,
.v-leave-active {
  transition: all 1s;
}

.DialogueBox-enter-from,
.DialogueBox-leave-to {
  transform: translateY(0px);
}

.DialogueBox-enter-to,
.DialogueBox-leave-from {
  transform: translateY(0px);
}

.DialogueBox-enter-active,
.DialogueBox-leave-active {
  transition: all 1s;
}
</style>
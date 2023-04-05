<template>
  <Slots></Slots>
  <div>
    <!-- <ComponentOneVue v-if="showComponent==='ComponentOneVue'"></ComponentOneVue>
    <ComponentTwoVue v-if="showComponent==='ComponentTwoVue'"></ComponentTwoVue> -->
    <div>
      <KeepAlive>
        <Component :is="showComponent"></Component>
      </KeepAlive>
    </div>
  </div>
  <button class="mx-5  my-3 "   @click="showComp1">show comp1</button>
  <button  @click="showComp2">show comp2</button>
</template>
<script >
import Slots from './components/Slots.vue';
import ComponentOne from './components/ComponentOne.vue';
import ComponentTwo from './components/ComponentTwo.vue';
export default {
  data() {
    return {
      showComponent: "ComponentOne"
    }
  },
  methods: {
    showComp1() {
      this.showComponent = "ComponentOne";

    },
    showComp2() {
      this.showComponent = "ComponentTwo";
    }
  },
  components: {
    Slots,
    ComponentOne,
    ComponentTwo
  }
}

</script>
<style scoped>

</style>

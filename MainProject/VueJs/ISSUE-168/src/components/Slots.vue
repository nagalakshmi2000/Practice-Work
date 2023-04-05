
<template>
  <div class="row">
    <div class="col-md-4">

      <slotApp>

        <HobbyVue #default="slotProps">
          <h1>{{ slotProps.item }}</h1>
        </HobbyVue>

      </slotApp>

    </div>
    <div class="col-md-4">

      <slotAp1>

        <template #slot1>
          <HobbyVue #default="slotProps">
            <h3>{{ slotProps.item }}</h3>
          </HobbyVue>
        </template>

      </slotAp1>

    </div>
  </div>

</template>

<script>
import slotApp from "./Slot.vue";
import slotAp1 from "./Slot1.vue";
import HobbyVue from "./Hobby.vue";
export default {
  data() {
    return {
      name: "Hello world"
    }
  },
  components: {
    slotApp,
    slotAp1,
    HobbyVue
  }
}
</script>


<style scoped>

</style>

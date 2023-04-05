<template>
  <div>
    <Owner></Owner>
  </div>
  <hr>
  <Item></Item>
  <ItemTable></ItemTable>
</template>

<script>
import Owner from '../components/Owner.vue';
import Item from '../components/Item.vue';
import ItemTable from '../components/ItemTable.vue';
export default {
  components: {
    Owner,
    Item,
    ItemTable,
}
}
</script>

<style lang="scss" scoped>

</style>
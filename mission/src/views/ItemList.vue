<template>
  <div id="item-list-page">
    <ItemHeader/>
    <ItemNav/>
  </div>
</template>

<script>
import ItemHeader from '@/components/ItemList/ItemHeader.vue';
import ItemNav from '@/components/ItemList/ItemNav.vue';

export default {
  name: 'ItemListPage',
  components: {
    ItemNav,
    ItemHeader,
  },
};
</script>

<style>
</style>

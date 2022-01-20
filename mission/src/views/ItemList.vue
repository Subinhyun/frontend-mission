<template>
  <div id="item-list-page">
    <ItemHeader />
    <Item v-for="product in products" :key="product" :product="product"/>
    <ItemNav />
  </div>
</template>

<script>
import Item from '@/components/ItemList/Item.vue';
import ItemHeader from '@/components/ItemList/ItemHeader.vue';
import ItemNav from '@/components/ItemList/ItemNav.vue';

export default {
  name: 'ItemListPage',
  components: {
    ItemNav,
    ItemHeader,
    Item,
  },
  data() {
    return {
      products: [
        {
          id: 0,
          title: '슈퍼스타',
          color: ['white', 'black'],
          content: 'Born in France',
          sale: 34,
          price: 120000,
          img: 'https://image.adidas.co.kr/upload/prod/basic/source/EH0050-01-01.jpg',
        },
        {
          id: 1,
          title: '이지 부스트 350 V2',
          content: '인기',
          price: 289000,
          img: 'https://image.adidas.co.kr/upload/prod/basic/source/H02795-01-01.jpg',
        },
        {
          id: 2,
          title: '크리스티나이드',
          content: 'Born in the States',
          price: 130000,
          img: 'https://image.adidas.co.kr/upload/prod/basic/source/FV6956-01-01.jpg',
        },
      ],
    };
  },
};
</script>

<style>
</style>

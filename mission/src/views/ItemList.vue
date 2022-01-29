<template>
  <div id="item-list-page">
    <ItemHeader :shop="shop"/>
    <div id="item-list">
    <Item
      v-for="product in products"
      :key="product"
      :product="product"
      :rate="rate"
    />
    </div>
    <ItemNav />
  </div>
</template>

<script>
import { reactive } from 'vue';
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
  setup() {
    const shop = reactive({
      title: 'My shopping mall',
    });
    const products = reactive([
      {
        id: 0,
        title: '슈퍼스타',
        color: ['white', 'black'],
        content: 'Born in France',
        sale: 34,
        price: 79200,
        original_price: 120000,
        img: 'https://image.adidas.co.kr/upload/prod/basic/source/EH0050-01-01.jpg',
      },
      {
        id: 1,
        title: '이지 부스트 350',
        content: ' ☆인기☆',
        original_price: 289000,
        img: 'https://image.adidas.co.kr/upload/prod/basic/source/H02795-01-01.jpg',
      },
      {
        id: 2,
        title: '크리스티나이드',
        content: 'Born in the States',
        original_price: 130000,
        img: 'https://image.adidas.co.kr/upload/prod/basic/source/FV6956-01-01.jpg',
      },
      {
        id: 0,
        title: '슈퍼스타',
        color: ['white', 'black'],
        content: 'Born in France',
        sale: 34,
        price: 79200,
        original_price: 120000,
        img: 'https://image.adidas.co.kr/upload/prod/basic/source/EH0050-01-01.jpg',
      },
      {
        id: 1,
        title: '이지 부스트 350',
        content: ' ☆인기☆',
        original_price: 289000,
        img: 'https://image.adidas.co.kr/upload/prod/basic/source/H02795-01-01.jpg',
      },
      {
        id: 2,
        title: '크리스티나이드',
        content: 'Born in the States',
        original_price: 130000,
        img: 'https://image.adidas.co.kr/upload/prod/basic/source/FV6956-01-01.jpg',
      },
    ]);
    return {
      shop,
      products,
    };
  },
};
</script>

<style>

#item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  grid-gap: 15px;
  margin-top: 10%;
  margin-bottom: 20%;
}

</style>

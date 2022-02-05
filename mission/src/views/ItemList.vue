<template>
  <div id="item-list-page">
    <ItemHeader :shop="shop"/>
    <p id="for-sale">판매 중인 상품</p>
    <div id="item-list">
    <Item
      v-for="product in products"
      :key="product.product_no"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :original_price="product.original_price"
    />
    </div>
    <ItemNav />
  </div>
</template>

<script>
import Item from '@/components/ItemList/Item.vue';
import ItemHeader from '@/components/ItemList/ItemHeader.vue';
import ItemNav from '@/components/ItemList/ItemNav.vue';
import Repository from '@/repositories/RepositoryFactory';

const ItemRepository = Repository.get('items');

export default {
  name: 'ItemListPage',
  components: {
    ItemNav,
    ItemHeader,
    Item,
  },
  data() {
    return {
      shop: { title: 'My shopping mall' },
      products: [],
      loading: true,
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    async getItem() {
      const { data } = await ItemRepository.get();
      this.products = data.items;
    },
  },
};
</script>

<style>

#item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  grid-gap: 15px;
  margin-top: 5%;
  margin-bottom: 20%;
}

#for-sale {
  text-align: left;
  margin-bottom: 0;
  margin-left: 20px;
  color: #808080;
}

</style>

<template>
  <div id="wish-list-page">
    <WishHeader :shop="shop"/>
    <p id="for-sale">찜한 상품</p>
    <div id="wish-list">
    <Wish
      v-for="product in products"
      :key="product.product_no"
      :name="product.name"
      :description="product.description"
      :price="product.price"
    />
    </div>
    <WishNav />
  </div>
</template>

<script>
import Wish from '@/components/WishList/Wish.vue';
import WishHeader from '@/components/WishList/WishHeader.vue';
import WishNav from '@/components/WishList/WishNav.vue';
import Repository from '@/repositories/RepositoryFactory';

const WishRepository = Repository.get('wishs');

export default {
  name: 'WishListPage',
  components: {
    WishNav,
    WishHeader,
    Wish,
  },
  data() {
    return {
      shop: { title: 'My shopping mall' },
      products: [],
      loading: true,
    };
  },
  created() {
    this.getWish();
  },
  methods: {
    async getWish() {
      const { data } = await WishRepository.get();
      this.products = data.items;
    },
  },
};
</script>

<style>

#wish-list {
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

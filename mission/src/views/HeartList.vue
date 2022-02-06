<template>
  <div id="item-list-page">
    <HeartHeader :shop="shop"/>
    <p id="for-sale">찜한 상품</p>
    <div id="item-list">
    <Heart
      v-for="product in products"
      :key="product.product_no"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :original_price="product.original_price"
    />
    </div>
    <HeartNav />
  </div>
</template>

<script>
import Heart from '@/components/HeartList/Heart.vue';
import HeartHeader from '@/components/HeartList/HeartHeader.vue';
import HeartNav from '@/components/HeartList/HeartNav.vue';
import Repository from '@/repositories/RepositoryFactory';

const HeartRepository = Repository.get('wishs');

export default {
  name: 'HeartListPage',
  components: {
    HeartNav,
    HeartHeader,
    Heart,
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
      const { data } = await HeartRepository.get();
      this.products = data.wishs;
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

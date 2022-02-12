<template>
  <div id="item-cart-page">
    <ItemHeader :shop="shop"/>
    <p id="for-sale">장바구니</p>
    <div id="cart-list">
    <Item
      v-for="product in products"
      :key="product.product_no"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :img="product.image"
    />
    </div>
    <div>
        <button data-test="buy-btn">
          <router-link class="link" :to="{ name: 'OrderPage'}">구매하러가기</router-link>
        </button>
    </div>
    <ItemNav />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Item from '@/components/ItemList/Item.vue';
import ItemHeader from '@/components/ItemList/ItemHeader.vue';
import ItemNav from '@/components/ItemList/ItemNav.vue';
// import Repository from '@/repositories/RepositoryFactory';

// const WishRepository = Repository.get('carts');
// import { mapGetters } from 'vuex';
export default {
  name: 'CartPage',
  components: {
    ItemNav,
    ItemHeader,
    Item,
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
      products: (state) => state.products,
    }),
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
  // data() {
  //   return {
  //     shop: { title: 'My shopping mall' },
  //     products: [],
  //     loading: true,
  //   };
  // },
  // created() {
  //   this.getWish();
  // },
  // methods: {
  //   async getWish() {
  //     const { data } = await WishRepository.get();
  //     this.products = data.cart_item;
  //   },
  // },
  // computed: {
  //   ..mapGetters({
  //     askItems: 'fetchedAsk',
  //   }),
  // },
};
</script>

<style>

#cart-list {
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

button {
  margin: 0;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #ffbf00;
}

</style>

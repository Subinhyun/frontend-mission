import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0,
    cart_item: [],
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      const productInCart = state.cart_item.product.product_no === product.product_no;

      if (productInCart) {
        productInCart.quantity += quantity;
        return;
      }

      state.cart_item.push({
        product,
        quantity,
      });
    },
  },
  getters: {
    // cartItem: (state) => state.cart_item,
    // cartItemCount(state) {
    //   return state.cart_item.length;
    // },
    // totalPrice: (state) => {
    //   let total = 0;
    //   state.cart_item.forEach((item) => {
    //     total += item.product.price;
    //   });
    //   return total;
    // },
  },
  actions: {
    addToCart: ({ commit }, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity });
    },
  },
});

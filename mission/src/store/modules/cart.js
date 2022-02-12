import { createStore } from 'vuex';

export default createStore({
  state: {
    items: [],
  },
  mutations: {
    addToCart: (state, payload) => {
      state.cartItem.push(payload);
    },
    // removeItem: (state, payload) => {
    //   state.cartItem.splice(payload, 1);
    // },
    // clearCart(state) {
    //   state.cartItem.splice(0, state.cartItem.length);
    // },
  },
  getters: {
    // cartItems(state, rootState) {
    //   return state.items.map((cartItem) => {
    //     const product = rootState.products.items.find((product) => product.id === cartItem.id);
    //     return {
    //       name: product.name,
    //       price: product.price,
    //       quantity: cartItem.quantity,
    //     };
    //   });
    // },
    // cartTotal(state, getters) {
    //   return getters.cartProducts.reduce((total,
    //     product) => total + product.price * product.quantity, 0);
    // },
  },
  actions: {
  },
});

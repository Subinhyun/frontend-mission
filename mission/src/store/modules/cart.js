const state = {
  count: 0,
  cart_item: [
    {
      product_no: 'asdf1234',
      name: '핏이 좋은 수트',
      image: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png',
      price: 198000.0,
      original_price: 298000.0,
      description: '아주 잘 맞는 수트',
    },
    {
      product_no: 'defg5678',
      name: '우주복 코스튬',
      image: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-3.jpg',
      price: 300000,
      description: '관심 받고 싶을 때',
    },
  ],
};
const getters = {
  cartItem() {
    return state.cart_item;
  },
  cartItemCount() {
    return state.cart_item.length;
  },
  totalPrice() {
    let total = 0;
    state.cart_item.forEach((item) => {
      total += item.product.price;
    });
    return total;
  },
};
const mutations = {
//   ADD_TO_CART: (state, { product, quantity }) => {
//     const productInCart = state.cart_item.product.product_no === product.product_no;
//     if (productInCart) {
//       productInCart.quantity += quantity;
//       return;
//     }
//     state.cart_item.push({
//       product,
//       quantity,
//     });
//   },
};
const actions = {
  addToCart: ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CART', { product, quantity });
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};

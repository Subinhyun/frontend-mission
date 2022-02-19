<template>
    <div id="item-order-page">
      <h1>주문하기</h1>
      <span> {{ cartItemName }} 포함 </span>
      <span> {{ cartItemCount }}건 </span>
      <span> {{ totalPrice }} </span>
      <p>주문자명</p>
      <input data-test="input-name" type="text">
      <p>전화번호</p>
      <input data-test="input-number" type="text">
      <p>수령 주소</p>
      <input data-test="input-address" type="text">
      <p>배송 방법</p>
      <input data-test="delivery-btn" type="radio" id="one" value="택배" v-model="picked">
      <label for="one">택배</label>
      <br>
      <input data-test="delivery-btn" type="radio" id="two" value="퀵 배송" v-model="picked">
      <label for="two">퀵 배송</label>
      <br>
      <span>선택한 배송 방법: {{ picked }}</span>
      <p>결제 방법</p>
      <button data-test="card-btn" id="card-btn">
        <fa icon="credit-card"></fa><br>신용카드
      </button>
      <button data-test="account-btn" id="account-btn">
        <fa icon="money-bill"></fa><br>계좌이체
      </button>
      <br>
      <button data-test="order-btn">
        <router-link class="link" :to="{ name: 'OrderCompletePage'}">주문하기</router-link>
      </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ItemOrderPage',
  data() {
    return {
      picked: '',
    };
  },
  computed: {
    ...mapGetters(['cartItemCount', 'totalPrice']),
    cartItems() {
      return this.$store.getters.cartItem;
    },
    cartItemName() {
      return this.cartItems[0].name;
    },
  },
};
</script>

<style>

body {
  padding-top: 0;
}

button {
  margin-top: 2.5%;
  margin-right: 2.5%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  border: none;
  border-radius: 4px;
}

</style>

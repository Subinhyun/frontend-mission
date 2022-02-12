<template>
  <div id="item-order-complete">
      <fa icon="check" id="check"></fa>
      <p>주문 완료</p>
      <button data-test="home-btn">
        <router-link class="link" :to="{ name: 'Home'}">홈으로 가기</router-link>
      </button>
  </div>
</template>

<script>
export default {
  name: 'OrederComplete',
};

</script>

<style>

#item-order-complete {
    padding-top: 50%;
}

#check {
    font-size: 200%;
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

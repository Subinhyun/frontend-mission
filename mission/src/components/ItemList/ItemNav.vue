<template>
  <div class="item-list-nav">
    <ul>
      <li data-test="home" ><router-link class="link" :to="{ name: 'Home'}">
        <fa icon="home"></fa><br>홈</router-link></li>
      <li data-test="heart" ><router-link class="link" :to="{ name: ''}">
        <fa icon="heart"></fa><br>찜</router-link></li>
      <li data-test="cart"><router-link class="link" :to="{ name: ''}">
        <fa icon="shopping-cart"></fa><br>장바구니</router-link></li>
      <li data-test="myPage"><router-link class="link" :to="{ name: ''}">
        <fa icon="user"></fa><br>마이페이지</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ItemListNav',
};
</script>

<style>

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0px;
}

li {
  float: left;
  margin-right: 20px;
}

</style>

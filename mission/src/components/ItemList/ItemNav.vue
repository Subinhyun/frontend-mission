<template>
<nav v-on="handleScroll">
  <div class="item-list-nav">
    <hr>
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
</nav>
</template>

<script>
export default {
  name: 'ItemListNav',
  data() {
    return {
      limitPosition: 500,
      scrolled: false,
      lastPosition: 0,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true;
      }
      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
      }
      this.lastPosition = window.scrollY;
    },
  },
};
</script>

<style>

.item-list-nav {
  position : fixed;
  bottom : 0px;
  margin: 0px auto;
  height: 10%;
  width: 100%;
  overflow: hidden;
  background-color: white;
}

hr {
  color: #eee;
  margin: 0px auto;
}

a {
  text-decoration: none;
  color: #3c434a;
}

ul {
  position: absolute;
  list-style: none;
  width: 100%;
  text-align: center;
  margin: 10px auto;
  padding: 0;
}

li {
  display: inline-block;
  font-size: 18px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 0;
}

</style>

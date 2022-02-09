<template>
  <header>
    <div class="wish-list-header">
      <h1 data-test="shop-title" >{{ shop.title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'WishListHeader',
  props: ['shop'],
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY !== 0;
    },
  },
  computed: {
    isVisible() {
      return this.isScrolled ? '-50px' : '0px';
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>

header {
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  height: 10%;
  padding: 1rem;
  color: black;
  font-weight: bold;
}

.wish-list-header {
  text-align: center;
  vertical-align: center;
}

</style>

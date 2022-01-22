<template>
  <header v-show="!showHeader" :style="opacityStyle">
    <div class="item-list-header">
      <h1 data-test="shop-title" >{{ shop.title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ItemListHeader',
  props: ['shop'],
  data() {
    return {
      showHeader: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  mounted() {
    window.addEventListener('scroll', this.OnScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.OnScroll);
  },
  methods: {
    OnScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showHeader = true;
      } else {
        this.showHeader = false;
      }
    },
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
  color: white;
  text-shadow: -1px 0 #eee, 0 1px black, 1px 0 black, 0 -1px #eee;
  font-weight: bold;
  background: linear-gradient(to top, white,#C9D6FF);

}

.item-list-header {
  text-align: center;
  vertical-align: center;
}

</style>

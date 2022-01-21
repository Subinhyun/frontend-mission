<template>
  <header v-show="!showHeader" :style="opacityStyle">
    <div class="item-list-header">
      <h1>{{ shop.title }}</h1>
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
  color: black;
  font-weight: bold;
}

.header.is-hidden {
  transform: translateY(-100%);
}

.item-list-header {
  text-align: center;
  vertical-align: center;
}

</style>

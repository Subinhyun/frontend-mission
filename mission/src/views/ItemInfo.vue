<template>
<div id='item-info-page'>
  <div class="main">
    <img id="main-Image" data-test="main-Image" :src="product.img">
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      product: {
        id: 0,
        title: '슈퍼스타',
        content: 'Born in France',
        sale: 34,
        price: 120000,
        img: 'https://image.adidas.co.kr/upload/prod/basic/source/EH0050-01-01.jpg',
      },
    };
  },
  methods: {

  },
  computed: {

  },
};
</script>

<style scoped>

</style>

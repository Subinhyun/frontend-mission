<template>
  <div class="item-list-item">
    <div id="image">
      <img data-test="product-img" id="product-img" :src="product.img">
    </div>
    <p data-test="product-title">{{ product.title }}</p>
    <p data-test="product-price">{{ product.sale }}</p>
    <p data-test="product-price">{{ product.price }}</p>
    <p data-test="product-description">{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: ['product'],
};
</script>

<style>

#image {
  position: relative;
}

#product-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

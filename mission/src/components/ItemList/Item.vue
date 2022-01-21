<template>
<main>
  <div class="item-list-item">
    <img data-test="product-img" id="product-img" :src="product.img">
    <span data-test="product-price" id="product-price" >{{ product.sale }}</span>
    <span data-test="product-price" id="product-price">{{ product.price }}</span><br>
    <span data-test="product-title" id="product-title">{{ product.title }}</span><br>
    <span data-test="product-description" id="product-description">
      {{ product.description }}
    </span>
  </div>
</main>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: ['product'],
};
</script>

<style>

main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20%;
  margin-top: 15%;
  margin-left: 20px;
  margin-right: 20px;
}

body {
  padding-top: 75px;
}

.item-list-item {
  max-width: 100%;
  width: 50%;
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  flex: 3;
}

#product-img {
  width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
}

#product-title {
  font-weight: bold;
}

#product-description {
  float: left;
}

</style>

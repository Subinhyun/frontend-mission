<template>
<main>
  <div class="item-list-item">
    <router-link class="link" :to="{ name: 'ItemInfoPage'}">
      <img data-test="product-img" id="product-img" :src="product?.img">
    </router-link>
    <div v-if="product.price != null">
      <span data-test="product-sale" id="product-sale">
        {{ product.sale }}%
      </span>
      <span data-test="price" id="price">
        {{ product.price.toLocaleString() }}원
      </span><br>
    </div>
    <span v-else data-test="product-price" id="product-price">
      {{ product.original_price.toLocaleString() }}원
    </span>
    <p data-test="product-title" id="product-title">{{ product.title }}</p>
    <fa v-if="heart" @click="heartMark" id="noHeart" icon="heart"></fa>
    <fa v-else @click="heartMark" id="heart" icon="heart"></fa>
    <p data-test="product-description" id="product-description">
      {{ product.content }}
    </p>
  </div>
</main>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: ['product'],
  data() {
    return {
      heart: true,
    };
  },
  methods: {
    heartMark() {
      this.heart = !this.heart;
    },
  },
};
</script>

<style>

main {
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
}

.item-list-item {
  position: relative;
  box-shadow: 0 1px 5px rgba(0,0,0,0.2);
  border-radius: 4px;
  overflow: hidden;
}

body {
  padding-top: 75px;
}

#product-img {
  width: 100%;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  margin-bottom: 10px;
}

#product-sale {
  float: left;
  font-weight: bold;
  color: red;
  margin-right: 5px;
}

#product-price {
  float: left;
  margin-left: 5px;
  margin-right: 5px;
  padding: 0;
  margin: 0;
}

#product-title {
  float: left;
  font-weight: bold;
  margin-left: 5px;
  margin: 0;
}

#product-description {
  float: left;
  margin-left: 5px;
  margin: 0;
}

#noHeart {
  float: right;
  margin-right: 5px;
  color: #eee;
}

#heart {
  float: right;
  margin-right: 5px;
  color: rgb(221, 80, 80);
}

</style>

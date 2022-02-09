<template>
<main>
  <div class="wish-list-item">
      <img data-test="product-img" id="product-img" :src="img">
    <div>
      <span data-test="product-price" id="price">
        {{ price.toLocaleString() }}원
      </span><br>
    </div>
    <p data-test="product-name" id="product-name">{{ name }}</p>
    <fa v-if="heart" @click="heartMark" id="noHeart" icon="heart"></fa>
    <fa v-else @click="heartMark" id="heart" icon="heart"></fa>
    <p data-test="product-description" id="product-description">
      {{ description }}
    </p>
  </div>
</main>
</template>

<script>
export default {
  name: 'Wish',
  props: {
    id: { type: Number, default: 1 },
    product_no: { type: String, default: '' },
    name: { type: String, default: '' },
    price: { type: Number, default: 0 },
    img: { type: String, default: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-3.jpg' },
    description: { type: String, default: '' },
  },
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

.wish-list-item {
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

#price {
  float: left;
  margin-left: 5px;
  margin-right: 5px;
  padding: 0;
  margin: 0;
}

#product-name {
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

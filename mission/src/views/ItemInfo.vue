<template>
<div id='item-info-page'>
  <div class="main">
    <img id="main-Image" data-test="main-Image" :src="product.image">
  </div>
  <div class='seller'>
    <div id="content">
      <img id="seller-image" data-test="seller-image" :src="product.seller.profile_image">
    </div>
    <div id="content">
      <h3 id="seller-name" data-test="seller-name">{{ product.seller.name }}</h3>
      <span id="seller-tag" data-test="seller-tag"
      v-for="tag in product.seller.hash_tags" :key="tag">
        #{{ tag }}
      </span>
    </div>
    <div id="star-content">
      <fa data-test="star" id="star" v-if="star" @click="starmark" icon="star" />
      <fa data-test="nostar" id="nostar" v-else @click="starmark" icon="star" />
    </div>
  </div>
  <div class="product-Datail">
    <hr>
    <div id="product-info">
      <h1 data-test="product-name">{{ product.name }}</h1>
      <span id="product-sale" data-test="product-sale">
        {{ display_discount_rate }}
      </span>
      <span id="product-sale-price" data-test="product-price">
        {{ product.price }}원
      </span>
      <span data-test="product-price" class="productPrice">
        {{ product.original_price }}원
      </span>
    </div>
    <div id="Detail">
      <h3>상품 정보</h3>
      <html v-html="product.description"></html>
    </div>
  </div>
  <div class="review">
    <hr color="#eee">
    <h2>리뷰</h2>
      <div id="review-content" v-for="value in product.reviews" :key="value">
        <hr>
        <span id="review-id" data-test="review-id">{{ value.writer }}</span>
        <span id="review-date" data-test="review-date">{{ value.created }}</span><br>
        <div v-if="ImgExists(value)">
          <img class="review-img" :src="value.img">
        </div>
        <span id="review-title" data-test="review-title">{{ value.title }}</span><br>
        <span data-test="review-content">{{ value.content }}</span>
      </div>
  </div>
  <div class="buy">
    <hr>
    <button id="buy-btn" data-test="buy-btn" @click="buy">
      {{ `${product.price}원 구매` }}
    </button>
  </div>
</div>
</template>

<script>
import Repository from '@/repositories/RepositoryFactory';

const ItemRepository = Repository.get('items');

export default {
  name: 'ItemInfoPage',
  props: {
    id: { type: Number, default: 1 },
  },
  data() {
    return {
      star: true,
      product: {
        seller: {},
        reviews: [{}],
      },
    };
  },
  created() {
    this.getItemInfo();
  },
  methods: {
    async getItemInfo() {
      const { data } = await ItemRepository.getPost(this.id);
      this.product = data.item;
    },
    buy() {
      this.select = !this.select;
    },
    starmark() {
      this.star = !this.star;
    },
    ImgExists(review) {
      return Object.prototype.hasOwnProperty.call(review, 'img');
    },
    doesReviewImgExists(review) {
      return Object.prototype.hasOwnProperty.call(review, 'img');
    },
  },
  computed: {
    display_discount_rate() {
      const rate = ((this.product.original_price - this.product.price)
      / this.product.original_price) * 100;
      return `${Number.prototype.toFixed.call(rate, 0)}%`;
    },
  },

};
</script>

<style scoped>

html, body {
  margin: 0;
  padding: 0;
}

#item-info-page {
  width: 100%;
  margin: 0px auto;
}

.main {
  position: relative;
  width: 375px;
  height: 375px;
  margin: 0px auto;
}

#main-Image {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
}

.seller {
  display: inline-table;
  width: 100%;
  height: 20%;
  margin: 10px auto;
  top: 50%;
  left: 50%;
}

#content {
  display: inline-table;
  float: left;
  text-align: center;
  margin-left: 10px;
}

span {
  padding-right: 10px;
}

#seller-image {
  float: left;
  width: 70px;
  height: 70px;
  border-radius: 70%;
  border: 1px solid gray;
  margin: 10px auto;
}

#seller-name {
  vertical-align: middle;
}

#seller-tag {
  vertical-align: middle;
}

#star {
  float: right;
  color: #fdd835;
  font-size: 40px;
  padding: 20px;
  vertical-align: middle;
}

#nostar {
  float: right;
  color: #eee;
  font-size: 40px;
  padding: 20px;
  vertical-align: middle;
}

.product-Detail {
  width: 100%;
  float: left;
  margin: 10px auto;
  overflow-y: scroll;
}

#product-info {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

#product-name {
  vertical-align: middle;
}

#product-sale {
  font-size: 25px;
  font-weight: bold;
  color: red;
}

#product-sale-price {
  font-size: 20px;
}

.productPrice {
  text-decoration : line-through;
}

#product-img {
  max-width: 100%;
  height: auto;
  display: block;
}

.review {
  overflow: hidden;
  position: relative;
  width: 100%;
  float: right;
  padding-bottom: 70px;
}

#review-content {
  margin: 10px auto;
  text-align: left;
}

#review-content span {
  text-align: left;

}

.review-img {
  transform: translate(50, 50);
  width: 20%;
  height: 20%;
  float: right;
}

#review-title {
  font-weight: bold;
  font-size: 20px;
}

.buy {
  overflow: hidden;
  height: auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 10px auto;
  text-align: center;
  vertical-align: middle;
  background-color: white;
}

#buy-btn {
  vertical-align: middle;
  background-color: black;
  color: white;
  border-radius: 8px;
  font-size: 20px;
}

.selected {
  vertical-align: middle;
  text-align: center;
  margin: 0px auto;
}

#color-select {
  width: 80%;
}

#selected-color {
  text-align: left;
}

#now-btn {
  width: 40%;
  margin-right: 10px;
  background-color: black;
  color: #ff5252;
  border-radius: 8px;
  font-size: 15px;
}

#cart-btn {
  width: 40%;
  margin-right: 10px;
  background-color: black;
  color: #ff5252;
  border-radius: 8px;
  font-size: 15px;
}

</style>

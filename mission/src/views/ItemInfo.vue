<template>
<div id='item-info-page'>
  <div class="main">
    <img id="main-Image" data-test="main-Image" :src="product.img">
  </div>
  <div class='seller'>
    <div id="content">
      <img id="seller-image" data-test="seller-image" :src="seller.img">
    </div>
    <div id="content">
      <h3 id="seller-name" data-test="seller-name">{{ seller.name }}</h3>
      <span id="seller-tag" data-test="seller-tag" v-for="i in this.seller.tag" v-bind:key="i">
        #{{ i }}
      </span>
      <div id="content">
        <i data-test="seller-star" class="bi bi-star"></i>
      </div>
    </div>
  </div>
  <div class="product-Datail">
    <div id="product-info">
      <h1 data-test="product-name">{{ product.title }}</h1>
      <span data-test="product-sale" >{{ product.sale }}% </span>
      <span data-test="product-price">{{ product.price }}</span>
      <span data-test="product-price">{{ product.price }}</span>
    </div>
    <div id="Detail">
      <p>상품 정보</p>
      <img id="product-img" :src="product.img">
    </div>
  </div>
  <div class="review">
    <h2>리뷰</h2>
    <p data-test="review-id">{{ review.id }}</p>
    <p data-test="review-date">{{ review.date }}</p>
    <p data-test="review-title">{{ review.title }}</p>
    <p data-test="review-content">{{ review.content }}</p>
  </div>
  <div class="buy">
    <button id="buy-btn" data-test="buy-btn" >{{ product.price }}원 구매</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      seller: {
        name: '아디다스',
        tag: ['남성', '신발'],
        img: 'https://image.adidas.co.kr/upload/prod/basic/source/EH0050-01-01.jpg',
      },
      product: {
        id: 0,
        title: '슈퍼스타',
        content: 'Born in France',
        sale: 34,
        price: 120000,
        img: 'https://image.adidas.co.kr/upload/prod/basic/source/EH0050-01-01.jpg',
      },
      review: {
        id: 'review',
        date: '2022-01-15',
        title: '너무 좋아요',
        content: '최고입니다 !!',
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

#item-info-page {
  width: 100%;
  margin: 0px auto;
}

.main {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0px auto;
}

#main-Image {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
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

#seller-image {
  float: left;
  width: 80px;
  height: 80px;
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

.product-Detail {
  display: inline-table;
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

#product-img {
  max-width: 100%;
  height: auto;
  display: block;
}

.review {
  width: 100%;
  height: 2px;
  float: left;
  background-color: #eee;
  margin: 10px auto;
}

.buy {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 10px auto;
  vertical-align: middle;
}

#buy-btn {
  background-color: black;
  text-align: center;
  color: white;
  border-radius: 8px;
  font-size: 30px;
  padding: 10px auto;
}

</style>

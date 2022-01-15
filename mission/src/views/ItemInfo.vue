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
      <span id="seller-tag" data-test="seller-tag" v-for="i in this.seller.tag" :key="i">
        #{{ i }}
      </span>
      <div id="content">
        <fa data-test="seller-star" class="bi bi-star"/>
      </div>
    </div>
  </div>
  <div class="product-Datail">
    <div id="product-info">
      <h1 data-test="product-name">{{ product.title }}</h1>
      <span data-test="product-sale" v-if="product.sale > 0">{{ product.sale }}% </span>
      <span data-test="product-price" v-if="product.sale > 0">{{ product.price }}</span>
      <span data-test="product-price">{{ product.price }}</span>
    </div>
    <div id="Detail">
      <h3>상품 정보</h3>
      <img id="product-img" :src="product.img">
      <p>{{ product.content }}</p>
    </div>
  </div>
  <div class="review">
    <h2>리뷰</h2>
    <div id="review" v-for="(value, index) in review" :key="index">
      <p data-test="review-id">{{ value.id }}</p>
      <p data-test="review-date">{{ value.date }}</p>
      <p data-test="review-title">{{ value.title }}</p>
      <p data-test="review-content">{{ value.content }}</p>
      <img id="review-img" v-if="this.review.img" :src="value.img">
    </div>
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
      review: [
        {
          id: 'review',
          date: '2022-01-15',
          title: '너무 좋아요',
          content: '최고입니다 !!',
          img: 'https://image.adidas.co.kr/upload/prod/basic/source/EH0050-01-01.jpg',
        },
        {
          id: 'review',
          date: '2022-01-15',
          title: '너무 좋아요',
          content: '최고입니다 !!',
        },
      ],
    };
  },
  methods: {
    secretId(id) {
      this.product.id = id.slice(0, 2) + '*'.repeat(id.length / 2);
    },
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
  margin: 20px auto;
  text-align: left;
}

#review-img {
  display: inline-table;
  transform: translate(50, 50);
  width: 30%;
  height: 30%;
  float: right;
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

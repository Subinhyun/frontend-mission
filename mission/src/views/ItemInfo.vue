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
    </div>
    <div id="star-content">
      <font-awesome-icon data-test="star" id="star" v-if="star" @click="starmark" icon="star" />
      <font-awesome-icon data-test="nostar" id="nostar" v-else @click="starmark" icon="star" />
    </div>
  </div>
  <div class="product-Datail">
    <hr>
    <div id="product-info">
      <h1 data-test="product-name">{{ product.title }}</h1>
      <span id="product-sale" data-test="product-sale" v-if="product.sale > 0">
        {{ product.sale }}%
      </span>
      <span id="product-sale-price" data-test="discount-price" v-if="product.sale > 0">
        {{ calSale }}원
      </span>
      <span data-test="product-price" class="product-price" >{{ product.price }}원</span>
    </div>
    <div id="Detail">
      <h3>상품 정보</h3>
      <img id="product-img" :src="product.img">
      <p>{{ product.content }}</p>
    </div>
  </div>
  <div class="review">
    <hr color="#eee">
    <h2>리뷰</h2>
    <div id="review" v-for="(value, index) in review" :key="index">
      <span id="review-id" data-test="review-id">{{ secretId(value.id) }}</span>
      <span id="review-date" data-test="review-date">{{ value.date }}</span>
      <p data-test="review-title">{{ value.title }}</p>
      <p data-test="review-content">{{ value.content }}</p>
      <img id="review-img" v-if="this.review.img" :src="value.img">
      <hr>
    </div>
  </div>
  <div class="buy">
    <button id="buy-btn" data-test="buy-btn" v-if="select" @click="buy">{{ calSale }}원 구매</button>
    <div v-else class="selected">
      <select data-test="select-color" v-model="select_model">
        <option v-for="color in this.product.color" :key="color">{{ color }}</option>
      </select>
      <p>색상 : {{ select_model }}</p>
      <button data-test="now-buy" >바로 구매</button>
      <button data-test="cart">장바구니</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      star: true,
      select: true,
      select_model: '',
      seller: {
        name: '아디다스',
        tag: ['남성', '신발'],
        img: 'https://image.adidas.co.kr/upload/prod/basic/source/EH0050-01-01.jpg',
      },
      product: {
        id: 0,
        title: '슈퍼스타',
        color: ['white', 'black'],
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
      return id.slice(0, 2) + '*'.repeat(id.length / 2);
    },
    buy() {
      this.select = !this.select;
    },
    starmark() {
      this.star = !this.star;
    },
  },
  computed: {
    calSale() {
      const discount = Math.round(this.product.price * (this.product.sale / 100));
      const totalPrice = this.product.price - discount;
      return totalPrice;
    },
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
  color: red;
}

#product-sale-price {
  font-size: 20px;
}

.product-price {
  text-decoration : line-through;
}

#product-img {
  max-width: 100%;
  height: auto;
  display: block;
}

.review {
  position: relative;
  width: 100%;
  float: left;
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
  overflow: hidden;
  height: auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 10px auto;
  padding: 10px auto;
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

</style>

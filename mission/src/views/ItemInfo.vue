<template>
<div id='item-info-page'>
  <div class="main">
    <img id="main-Image" data-test="main-Image" :src="product.img">
  </div>
  <div class='seller'>
    <table>
      <tr>
        <td rowspan="2" >
          <img id="seller-image" data-test="seller-image" :src="seller.img">
        </td>
        <td><h3 id="seller-name" data-test="seller-name">{{ seller.name }}</h3></td>
      </tr>
      <tr>
        <td>
          <p id="seller-tag" data-test="seller-tag" v-for="tag in this.seller.tag" v-bind:key="tag">
            #{{ tag }}
          </p>
        </td>
      </tr>
    </table>
  </div>
  <div class="product-Datail"></div>
  <div class="buy"></div>
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
  margin: 10px auto;
}

td {
  text-align: center;
  vertical-align: center;
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
  float: right;
}

#seller-tag {
  float: right;
}

</style>

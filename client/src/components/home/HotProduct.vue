<template>
  <div class="row mot-hang">
    <a href="danh-sach.html" class="big-title">MÁY BÁN CHẠY NHẤT</a>
    <span></span>
    <div class="owl-carousel">
      <div class="owl-carousel-slide" v-for="product in hotProduct">
        <div class="product-box ph">
          <img src="../../assets/images/p7.jpg">
          <div class="name-price">
            <p class="name-product">{{ product.title }}</p>
            <p class="price-product">{{ product.price }} VNĐ</p>
            <div class="info-product info-ph">
              <div>
                <p>{{ product.title }}</p>
                <p>{{ product.price }} VNĐ</p>
                <span></span>
                <p v-for="value, name in product.main_property" class="des">{{ name }} {{value}}</p>
              </div>
              <a :href="'/product/' + product._id" class="watch">Xem chi tiết</a>
              <span class="buy" @click.stop.prevent="addtocart(product._id)">Mua hàng</span>
              <span class="buy added">Đã thêm vào giỏ hàng</span>
            </div><!-- end info-box -->
          </div><!-- end name-price -->
        </div><!-- end product-box -->
      </div>
    </div><!-- end owl-carousel -->
  </div> <!-- end row -->
</template>
<script>
  export default {
    props: ['hotProduct'],
    methods: {
      // let SERVER = process.env.SERVER
      addtocart (id) {
        if (localStorage.cart) {
          let cart = JSON.parse(localStorage.cart)
          if (cart[id] > 0) {
            cart[id] += 1
          } else {
            cart[id] = 1
          }
          localStorage.cart = JSON.stringify(cart)
        } else {
          let cart = {}
          cart[id] = 1
          localStorage.cart = JSON.stringify(cart)
        }
      }
    }
  }
</script>

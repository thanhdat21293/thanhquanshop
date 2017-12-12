<template>
  <div class="row mot-hang">
    <a href="danh-sach.html" class="big-title">HÀNG MỚI VỀ</a>
    <span></span>
    <div class="owl-carousel">
      <div class="owl-carousel-slide"  v-for="product in latestProduct">
        <div class="product-box ph">
          <span class="tag-hot tag-new">NEW</span>
          <img src="../../assets/images/p9.jpg">
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
              <span class="buy" :url="product._id" @click.stop.prevent="addtocart(product._id)">Thêm vào giỏ <i class="fa fa-shopping-cart"></i></span>
            </div><!-- end info-box -->
          </div><!-- end name-price -->
        </div><!-- end product-box -->
      </div>
    </div><!-- end owl-carousel -->
  </div><!-- end row -->
</template>
<script>
  import axios from 'axios'
  let SERVER = process.env.SERVER
  let $ = require('jquery')
  export default {
    props: ['latestProduct'],
    methods: {
      addtocart (id) {
        if (localStorage.cart) {
          let cart = JSON.parse(localStorage.cart)
          if (cart[id] > 0) {
            cart[id] += 1
          } else {
            cart[id] = 1
          }
          axios.post(`${SERVER}/api/product/checktocart`, cart)
            .then(res => {
              if (res.data.message === 'ok') {
                localStorage.cart = JSON.stringify(cart)
              } else {
                let message = ''
                res.data.results.map((item, index) => {
                  if (index > 0) {
                    message += '<br><br>'
                  }
                  message += `Sản phẩm <b>${item.title}</b> còn <b>${item.qty}</b> trong kho.`
                })
                $('#addtocart-modal .bg-warning').html(message)
                $('#btn-addtocart-modal').click()
              }
            })
        } else {
          let cart = {}
          cart[id] = 1
          axios.post(`${SERVER}/api/product/checktocart`, cart)
            .then(res => {
              if (res.data.message === 'ok') {
                localStorage.cart = JSON.stringify(cart)
              } else {
                let message = ''
                res.data.results.map((item, index) => {
                  if (index > 0) {
                    message += '<br><br>'
                  }
                  message += `Sản phẩm <b>${item.title}</b> còn <b>${item.qty}</b> trong kho.`
                })
                $('#addtocart-modal .bg-warning').html(message)
                $('#btn-addtocart-modal').click()
              }
            })
        }
      }
    }
  }
</script>

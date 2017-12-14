<template>
  <span class="buy" @click.stop.prevent="addtocart(productId)">
    Thêm vào giỏ
    <i class="fa fa-spinner fa-pulse" style="color:#fff" v-if="adding"></i>
    <i class="fa fa-shopping-cart" style="color:#fff" v-else></i>
  </span>
</template>
<script>
  import axios from 'axios'
  let SERVER = process.env.SERVER
  let $ = require('jquery')
  export default {
    props: ['productId', 'adding'],
    methods: {
      addtocart (id) {
        // $('.buy i').attr('class', 'fa fa-spinner fa-pulse')
        this.adding = '1'
        if (localStorage.cart) {
          let cart = JSON.parse(localStorage.cart)
          if (cart[id] > 0) {
            cart[id] += 1
          } else {
            cart[id] = 1
          }
          axios.post(`${SERVER}/api/product/checktocart`, cart)
            .then(res => {
              this.adding = ''
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

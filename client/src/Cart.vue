<template>
  <section class="container" id="cart-page">
    <div class="row mot-hang">
      <a href="" class="big-title">GIỎ HÀNG</a>
      <span></span>
    </div>
    <div class="cart">
      <div class="row cart-info">
        <div class="col-md-4 no-padding">
          <ul>
            <li>Sản phẩm</li>
            <li class="col4">&nbsp;</li>
          </ul>
        </div>
        <div class="col-md-4 no-padding">
          <ul>
            <li class="col4">Đơn giá</li>
            <li class="col4">Số lượng</li>
          </ul>
        </div>
        <div class="col-md-4 no-padding">
          <ul>
            <li class="col4">Tạm tính</li>
            <li class="col4">&nbsp;</li>
          </ul>
        </div>
      </div><!-- enf cart-info -->
      <div v-if="products.length">
        <div class="row product-selected" v-for="product in products" :id="'div_' + product._id">
          <div class="col-md-4 no-padding">
            <ul>
              <li><span class="number">1</span><span class="img"></span></li>
              <li>{{product.title}}</li>
            </ul>
          </div>
          <div class="col-md-4 no-padding">
            <ul>
              <li><p>Giá:</p>{{product.price}} VNĐ</li>
              <li>
                <input type="number" class="" :value="product.qty" :id="'input_' + product._id" @change.stop.prevent="changeQty(product._id)">
                <i :class="'fa fa-spinner fa-pulse i0_' + product._id" style="display:none"></i>
                <i :class="'fa fa-check i1_' + product._id" style="display:none"></i>
              </li>
            </ul>
          </div>
          <div class="col-md-4 no-padding">
            <ul>
              <li><p>Tạm tính:</p>{{product.price * product.qty}} VNĐ</li>
              <li><span class="del" @click.stop.prevent="deleteProduct(product._id)"></span></li>
            </ul>
          </div>
        </div> <!-- enf product-selected -->
      </div>
      <div class="row product-selected" v-else>
        <div class="col-md-12 no-padding">
          <ul>
            <li style="width:100%">Không có sản phẩm trong giỏ,
              <a href="/"> Mua hàng</a>
            </li>
          </ul>
        </div>
      </div> <!-- enf product-selected -->

    </div>
    <div class="row" v-if="products.length">
      <form role="form" class="delivery-info">
        <div class="col-md-7">
            <div class="form-group d-name">
              <label for="delivery-name">Họ và tên:</label>
              <input type="text" class="form-control" id="delivery-name" name="name" placeholder="">
            </div>
            <div class="form-group d-phone">
              <label for="delivery-phone">Số điện thoại:</label>
              <input type="text" class="form-control" id="delivery-phone" name="phone" placeholder="">
            </div>
            <div class="form-group">
              <label for="contact-email">Địa chỉ Email của bạn :</label>
              <input type="email" class="form-control" id="contact-email" name="email" placeholder="">
              <p>Cần nhập email để nhận được thông tin đơn hàng từ Thành Quân SmartPhone</p>
            </div>
            <div class="form-group">
              <label for="delivery-address">Địa chỉ nhận hàng:</label>
              <input type="text" class="form-control" id="delivery-address" name="address" placeholder="">
              <p>Phí Ship được tính với khoảng cách trên 3km tính từ cửa hàng</p>
            </div>
            <div class="form-group line4">
              <label for="note">Lời nhắn:</label>
              <br>
              <textarea rows="2" name="comment" id="note"></textarea>
              <p>Ghi chú khi giao hàng (vd: ngày, giờ giao hàng)</p>
            </div>
            <div class="form-group code">
              <label for="code">Mã giảm giá:</label>
              <input type="text" class="form-control" id="code" name="coupon" placeholder="">
              <button type="button" class="btn btn-default">Áp dụng</button>
            </div>
        </div>  <!-- end col-->
        <div class="total  col-md-4 col-md-offset-1">
          <div class="payment">
            <label>Hình thức thanh toán</label>
            <div>
              <input id="bank_transfer" type="radio" name="payment">
              <label for="bank_transfer">Chuyển khoản ngân hàng</label>
            </div>
            <div class="online-payment-box">
              <input id="online_payment" class="online-payment-input" type="radio" name="payment">
              <label for="online_payment" class="online-payment-label">Thanh toán trực tuyến</label>
            </div>
            <div>
              <input id="cod_payment" type="radio" name="payment">
              <label for="cod_payment">COD - Nhận hàng trả tiền</label>
            </div>
          </div><!-- end payment-->
          <div class="total-line total-line-1"><p>Tạm tính:</p>
            <p>{{subTotal}} VNĐ</p></div>
          <div class="total-line total-line-2"><p>Phí Ship:</p>
            <p>0 VNĐ</p></div>
          <div class="total-line total-line-3"><p>Giảm giá:</p>
            <p>0 VNĐ</p></div>
          <div class="total-line total-line-4"><p>Tổng cộng:</p>
            <p>{{total}} VNĐ</p></div>
          <a class="buy product-buy-box" @click.stop.prevent="checkout()">THANH TOÁN</a>
          <a class="back-button" href="/">TIẾP TỤC MUA HÀNG</a>
        </div><!-- end col-->
      </form>
    </div><!--end row -->
    <div v-else></div>

  </section>
</template>
<script>
  import axios from 'axios'
  import $ from 'jquery'
  let SERVER = process.env.SERVER
  export default {
    data () {
      return {
        products: [],
        cart: localStorage.cart ? JSON.parse(localStorage.cart) : '',
        subTotal: 0,
        total: 0
      }
    },
    created () {
      this.getCart()
    },
    methods: {
      getCart () {
        if (localStorage.cart) {
          let cart = JSON.parse(localStorage.cart)
          axios.post(`${SERVER}/api/cart`, cart)
            .then(res => {
              let subTotal = 0
              res.data.getProduct.map((item, index) => {
                let product = res.data.getProduct[index]
                product.stt = index + 1
                product.qty = cart[item._id]
                subTotal += product.price * product.qty
              })
              this.products = res.data.getProduct
              this.subTotal = subTotal
              this.total = subTotal
            })
        }
      },
      checkout () {
        console.log(1)
      },
      deleteProduct (id) {
        $('#div_' + id).remove()
        delete this.cart[id]
        localStorage.cart = JSON.stringify(this.cart)
        this.getCart()
      },
      changeQty (id) {
        let qty = $('#input_' + id).val()
        $('.i0_' + id).show()
        if (qty < 1) {
          $('#div_' + id).remove()
          delete this.cart[id]
        } else {
          this.cart[id] = qty
        }
        $('.i0_' + id).hide()
        $('.i1_' + id).show()
        setTimeout(() => {
          $('.i1_' + id).hide()
        }, 1000)
        localStorage.cart = JSON.stringify(this.cart)
        this.getCart()
      }
    }
  }
</script>
<style scope>
  @import url('./assets/css/danh-sach-style.css');
  @import url('./assets/css/chi-tiet-style.css');
  @import url('./assets/css/gio-hang-style.css');
</style>

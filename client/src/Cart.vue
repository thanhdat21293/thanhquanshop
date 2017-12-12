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
      <div class="row product-selected">
        <div class="col-md-4 no-padding">
          <ul>
            <li><span class="number">1</span><span class="img"></span></li>
            <li>iPhone 7</li>
          </ul>
        </div>
        <div class="col-md-4 no-padding">
          <ul>
            <li><p>Giá:</p>22.990.000 VNĐ</li>
            <li><p>Số lượng:</p><input type="number" class="" value="1"></li>
          </ul>
        </div>
        <div class="col-md-4 no-padding">
          <ul>
            <li><p>Tạm tính:</p>22.990.000 VNĐ</li>
            <li><span class="del"></span></li>
          </ul>
        </div>
      </div> <!-- enf product-selected -->
    </div>
    <div class="row">
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
            <p>22.990.000 VNĐ</p></div>
          <div class="total-line total-line-2"><p>Phí Ship:</p>
            <p>0 VNĐ</p></div>
          <div class="total-line total-line-3"><p>Giảm giá:</p>
            <p>0 VNĐ</p></div>
          <div class="total-line total-line-4"><p>Tổng cộng:</p>
            <p>22.990.000 VNĐ</p></div>
          <a class="buy product-buy-box" @click.stop.prevent="checkout()">THANH TOÁN</a>
          <a class="back-button" href="/">TIẾP TỤC MUA HÀNG</a>
        </div><!-- end col-->
      </form>
    </div><!--end row -->
  </section>
</template>
<script>
  import axios from 'axios'
  let SERVER = process.env.SERVER
  export default {
    created () {
      let cart = JSON.parse(localStorage.cart)
      axios.post(`${SERVER}/api/product/cart`, {cart})
        .then(res => {
          console.log(cart)
        })
    },
    methods: {
      checkout () {
        console.log(1)
      }
    }
  }
</script>
<style scope>
  @import url('./assets/css/danh-sach-style.css');
  @import url('./assets/css/chi-tiet-style.css');
  @import url('./assets/css/gio-hang-style.css');
</style>

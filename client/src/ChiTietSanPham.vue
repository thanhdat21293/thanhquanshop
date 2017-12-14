<template>
  <section class="container" id="list-page">
		<div class="row mot-hang">
      <a href="" class="big-title big-title-list-page">ĐIỆN THOẠI</a>
      <span></span>
    </div> <!-- end -row -->
			<!-- THANH TIÊU ĐỀ //////////////////////////////////////////////////////////////////////// -->
      <div class="row">
        <aside class="col-md-2 list-menu-box">
          <ul>
            <li class="menu-box"><a class="title-list" href="">HÃNG SẢN XUẤT</a>
              <ul>
                <li><a class="chi-tiet-active" href="">APPLE</a></li>
                <li><a href="">SAMSUNG</a></li>
                <li><a href="">SONY</a></li>
                <li><a href="">OPPO</a></li>
                <li><a href="">ASUS</a></li>
                <li><a href="">LENOVO</a></li>
                <li><a href="">Các hãng khác</a></li>
              </ul>
            </li>
            <li class="menu-box"><a class="title-list" href="">GIÁ TIỀN</a>
              <ul>
                <li><a href="">Dưới 1 Triệu</a></li>
                <li><a href="">Từ 1 đến 3 triệu</a></li>
                <li><a href="">Từ 3 đến 5 triệu</a></li>
                <li><a href="">Từ 3 đến 7 triệu</a></li>
                <li><a href="">Từ 7 đến 10 triệu</a></li>
                <li><a href="">Từ 10 đến 15 triệu</a></li>
                <li><a href="">Trên 15 triệu</a></li>
              </ul>
            </li>
            <li class="menu-box"><a class="title-list" href="">LOẠI ĐIỆN THOẠI</a>
              <ul>
                <li><a href="">IOS (iPhone) </a></li>
                <li><a href="">Android</a></li>
                <li><a href="">Hệ điều hành khác</a></li>
                <li><a href="">Phổ thông</a></li>
              </ul>
            </li>
          </ul>
        </aside> <!-- end list-menu-box -->
			  <!-- HẾT CỘT NÀY RỒI  //////////////////////////////////////////////////////////////////////////////////////////// -->

        <div v-if="product">
          <div class="col-md-7 produce-detail">
            <h2 class="name-product">{{product.title}}</h2>
          </div>

          <div class="col-md-7 produce-detail" >
            <div class="image-product-box">
              <div class="mau mau0">
                <img class="product-big-image showImageAfterOnclick" src="/src/assets/images/big.jpg">
              </div>
            </div>
          </div>

          <div class="col-md-3 col-xs-12 produce-detail-2">
            <h2 class="price-product">{{product.price}} VNĐ</h2>
            <p class="code">Mã sản phẩm:<span>{{product._id}}</span></P>
            <ul class="promotion">
              <li>
                <ul>
                  <li>Trong hộp có :</li>
                  <li>Sạc, Tai nghe, Sách hướng dẫn, Jack chuyển tai nghe 3.5mm, Cáp, Cây lấy sim</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Bảo hành chính hãng :</li>
                  <li class="cut-bot">Thân máy 12 tháng</li>
                  <li class="cut-bot">Sạc 12 tháng</li>
                  <li>Tai nghe 12 tháng</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Giao hàng :</li>
                  <li>Tận nơi miễn phí trong 30 phút</li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Đổi hàng :</li>
                  <li>1 đổi 1 trong 1 tháng với sản phẩm lỗi</li>
                </ul>
              </li>
            </ul>
            <p class="quantity color-text"> Chỉ còn : <b>{{product.qty}}</b> sản phẩm</p>
            <ButtonAddToCart :productId="product._id"></ButtonAddToCart>
          </div>

          <div class="col-md-7 col-sm-12 col-sx-12 produce-detail detail-product-box">
            <h3>Thông số kỹ thuật </h3>
            <ul class="cau-hinh-don-gian">
              <li v-for="value, index in product.main_property">
                <p>{{index}}<span>{{value}}</span></p>
              </li>
            </ul>
            <button class="watch-more">Xem cấu hình chi tiết</button>
            <ul class="cau-hinh-chi-tiet" v-for="value, index in product.detail_property">
              <li class="label">{{index}}</li>
              <li v-for="value1, index1 in value">
                <p>{{index1}}</p>
                <p>{{value1}}</p>
              </li>
            </ul>
            <button class="watch-more close-button">Đóng</button>
          </div>

          <div class="col-md-3 col-xs-12 produce-detail-2 video-box">
            <p class="big-title video-text">Video sản phẩm</p>
            <div class="chi-tiet-video embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/R4jul7XuhK0" frameborder="0" allowfullscreen>></iframe>
            </div>
            <div class="video2 chi-tiet-video embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/voPP7LPX01E" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
		  </div> <!-- end row -->

<!-- HẾT CỘT NÀY RỒI  //////////////////////////////////////////////////////////////////////////////////////////// -->
		<div class="container" >
			<div class="row mot-hang">
        <a href="danh-sach.html" class="big-title">SẢN PHẨM TƯƠNG TỰ</a>
        <span></span>
      </div> <!-- end row -->

        <div class="row">
          <div class="owl-carousel">

            <div class="owl-carousel-slide">
              <div class="product-box ph">
                <img src="/src/assets/images/p9.jpg">
                <div class="name-price">
                  <p class="name-product">Samsung Galaxy C9 Pro</p>
                  <p class="price-product">11.490.000 VNĐ</p>
                  <div class="info-product info-ph">
                    <div>
                      <p>Samsung Galaxy C9 Pro</p>
                      <p>11.490.000 VNĐ</p>
                      <span></span>
                      <p>Màn hình: 6", Retina HD</p>
                      <p>HĐH: Android 6.0 (Marshmallow)</p>
                      <p>CPU: Apple A10 Fusion 4 nhân</p>
                      <p>Camera: 2x12 MP, Selfie: 7 MP</p>
                      <p>PIN: 2900 mAh, SIM: 1 SIM</p>
                    </div>
                    <a href="chi-tiet.html" class="watch">Xem chi tiết</a>
                    <span class="buy">Mua hàng</span>
                    <span class="buy added">Đã thêm vào giỏ hàng</span>
                  </div><!-- end info-box -->
                </div><!-- end name-price -->
              </div><!-- end product-box -->
            </div>

          </div><!-- end owl-carousel -->
        </div><!-- end row -->
        <!-- HẾT HÀNG NÀY RÔI / HẾT HÀNG NÀY RÔI / HẾT HÀNG NÀY RÔI / HẾT HÀNG NÀY RÔI /-->
    </div>
	</section>
</template>
<script>
  import axios from 'axios'
  import ButtonAddToCart from '@/components/ButtonAddToCart'
  let SERVER = process.env.SERVER
  export default {
    data () {
      return {
        product: {}
      }
    },
    created () {
      let productID = this.$route.params.id
      axios.get(`${SERVER}/api/dien-thoai/${productID}`)
        .then(res => {
          console.log(res.data.detail)
          this.product = res.data.detail
        })
    },
    methods: {
      addtocart (productID) {
        console.log(productID)
      }
    },
    components: {
      ButtonAddToCart
    }
  }
</script>
<style scope>
  @import url('./assets/css/danh-sach-style.css');
  @import url('./assets/css/chi-tiet-style.css');
</style>

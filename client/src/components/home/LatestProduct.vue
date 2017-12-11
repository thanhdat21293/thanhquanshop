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
              <span class="buy" :url="product._id">Mua hàng <i class="fa fa-shopping-cart"></i></span>
              <span class="buy added">Đã thêm vào giỏ hàng</span>
            </div><!-- end info-box -->
          </div><!-- end name-price -->
        </div><!-- end product-box -->
      </div>
    </div><!-- end owl-carousel -->
  </div><!-- end row -->
</template>
<script>
  export default {
    props: ['latestProduct']
  }
</script>

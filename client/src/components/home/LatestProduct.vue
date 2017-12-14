<template>
  <div class="row mot-hang">
    <a href="danh-sach.html" class="big-title">HÀNG MỚI VỀ</a>
    <span></span>
    <div class="owl-carousel">
      <div class="owl-carousel-slide"  v-for="product in latestProduct">
        <ProductInner :product="product"></ProductInner>
      </div>
    </div><!-- end owl-carousel -->
  </div><!-- end row -->
</template>
<script>
  import ProductInner from '@/components/product-inner'
  export default {
    props: ['latestProduct'],
    components: {
      ProductInner
    }
  }
</script>

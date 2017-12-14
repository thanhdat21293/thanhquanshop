<template>
  <div class="row mot-hang">
    <a href="danh-sach.html" class="big-title">MÁY BÁN CHẠY NHẤT</a>
    <span></span>
    <div class="owl-carousel">
      <div class="owl-carousel-slide" v-for="product in hotProduct">
        <ProductInner :product="product"></ProductInner>
      </div>
    </div><!-- end owl-carousel -->
  </div> <!-- end row -->
</template>
<script>
  import ProductInner from '@/components/product-inner'
  export default {
    props: ['hotProduct'],
    components: {
      ProductInner
    }
  }
</script>

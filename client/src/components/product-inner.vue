<template>
  <div class="product-box ph">
    <img src="/src/assets/images/p7.jpg">
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
        <a :href="'/#/san-pham/' + product._id" class="watch">Xem chi tiết</a>
        <ButtonAddToCart :productId="product._id"></ButtonAddToCart>
      </div><!-- end info-box -->
    </div><!-- end name-price -->
  </div><!-- end product-box -->
</template>
<script>
  import ButtonAddToCart from '@/components/ButtonAddToCart'
  export default {
    props: ['product'],
    components: {
      ButtonAddToCart
    }
  }
</script>

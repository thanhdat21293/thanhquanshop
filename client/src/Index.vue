<template>
  <div>
    <div class="blank-box" ></div> <!-- khoảng trắng ở phía trên để cách header với banner-->
      <Slide></Slide>
			<section class="container" >
        <HotProduct :hotProduct="hotProduct"></HotProduct>
				<QuangCao></QuangCao>
        <LatestProduct :latestProduct="latestProduct"></LatestProduct>
				<QuangCao></QuangCao>
        <PhuKien></PhuKien>
        <QuangCao></QuangCao>
        <Video></Video>
			</section>
  </div>
</template>
<script>
import Slide from '@/components/home/Slide'
import HotProduct from '@/components/home/HotProduct'
import LatestProduct from '@/components/home/LatestProduct'
import PhuKien from '@/components/home/PhuKien'
import Video from '@/components/home/Video'
import QuangCao from '@/components/home/QuangCao'
import axios from 'axios'
export default {
  data () {
    return {
      hotProduct: [],
      latestProduct: []
    }
  },
  created () {
    // HotProduct
    axios.get('http://localhost:3000/api/product/hotproduct')
      .then(res => {
        this.hotProduct = res.data.products
      })
    // LatestProduct
    axios.get('http://localhost:3000/api/product/latestproduct')
      .then(res => {
        this.latestProduct = res.data.products
      })
  },
  components: {
    Slide,
    HotProduct,
    LatestProduct,
    PhuKien,
    Video,
    QuangCao
  }
}
</script>

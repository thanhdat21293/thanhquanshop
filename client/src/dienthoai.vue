<template>
  <section class="container" id="list-page">
		<div class="row mot-hang">
      <a href="" class="big-title">DANH SÁCH ĐIỆN THOẠI</a>
      <span></span>
    </div> <!-- end -row -->
    <!-- THANH TIÊU ĐỀ //////////////////////////////////////////////////////////////////////// -->
		<div class="row">
			<aside class="col-md-3 list-menu-box">
				<ul>
					<li class="menu-box"><span class="title-list sap-xep-title" >SẮP XẾP</span>
						<ul class="sap-xep">
							<li><a href="">Mới nhất</a></li>
							<li><a href="">Bán chạy nhất</a></li>
							<li><a href="">Gía: thấp -> cao</a></li>
							<li><a href="">Giá: cao -> thấp</a></li>
							<li><a href="">Khuyến mại</a></li>
						</ul>
					</li>
					<li class="menu-box"><span class="title-list nhan-hieu-title" >HÃNG SẢN XUẤT</span>
						<ul class="nhan-hieu">
							<li><a href="">APPLE</a></li>
							<li><a href="">SAMSUNG</a></li>
							<li><a href="">SONY</a></li>
							<li><a href="">OPPO</a></li>
							<li><a href="">ASUS</a></li>
							<li><a href="">Các hãng khác</a></li>
						</ul>
					</li>
					<li class="menu-box"><span class="title-list gia-tien-title" >GIÁ TIỀN</span>
						<ul class="gia-tien">
							<li><a href="">Dưới 1 Triệu</a></li>
							<li><a href="">Từ 1 đến 3 triệu</a></li>
							<li><a href="">Từ 3 đến 5 triệu</a></li>
							<li><a href="">Từ 3 đến 7 triệu</a></li>
							<li><a href="">Từ 7 đến 10 triệu</a></li>
							<li><a href="">Từ 10 đến 15 triệu</a></li>
							<li><a href="">Trên 15 triệu</a></li>
						</ul>
					</li>
					<li class="menu-box"><span class="title-list loai-dien-thoai-title" >LOẠI ĐIỆN THOẠI</span>
						<ul class="loai-dien-thoai">
							<li><a href="">IOS (iPhone) </a></li>
							<li><a href="">Android</a></li>
							<li><a href="">Hệ điều hành khác</a></li>
							<li><a href="">Phổ thông</a></li>
						</ul>
					</li>
				</ul>
			</aside> <!-- end list-menu-box -->
			<!-- HẾT CỘT NÀY RỒI  //////////////////////////////////////////////////////////////////////////////////////////// -->

			<div class="col-md-3 col-sm-9" v-for="product in products">
				<ProductInner :product="product"></ProductInner>
			</div><!-- end col -->
			<!-- HẾT CỘT NÀY RỒI  //////////////////////////////////////////////////////////////////////////////////////////// -->
			<div class="col-md-12 pagination-box">
				<ul class="pagination">
          <li v-for="i in total">
            <a href="#">{{i}}</a>
          </li>
        </ul>
			</div><!-- end col -->
		</div><!-- end row -->
	</section>
</template>
<script>
  import axios from 'axios'
  import ProductInner from '@/components/product-inner'
  let SERVER = process.env.SERVER
  export default {
    data () {
      return {
        products: [],
        total: 0
      }
    },
    created () {
      let catID = this.$route.params.catID || '5a2a16286bc1e70d4038e59a'
      axios.get(`${SERVER}/api/product/productbycat/andchild/${catID}`)
        .then(res => {
          this.products = res.data.products
          this.total = res.data.total
        })
    },
    components: {
      ProductInner
    }
  }
</script>
<style scope>
  @import url('./assets/css/danh-sach-style.css');
</style>

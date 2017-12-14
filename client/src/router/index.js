import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import Cart from '@/Cart'
import Thankyou from '@/Thankyou'
import Dienthoai from '@/Dienthoai'
import ChiTietSanPham from '@/ChiTietSanPham'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/thank-you',
      name: 'Thankyou',
      component: Thankyou
    },
    {
      path: '/dien-thoai',
      name: 'Dienthoai',
      component: Dienthoai
    },
    {
      path: '/dien-thoai/:catID',
      name: 'Danhmucsanpham',
      component: Dienthoai
    },
    {
      path: '/san-pham/:id',
      name: 'ChiTietSanPham',
      component: ChiTietSanPham
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import Cart from '@/Cart'
import Thankyou from '@/Thankyou'
import Dienthoai from '@/Dienthoai'
import ChiTietSanPham from '@/ChiTietSanPham'
import PhuKien from '@/PhuKien'
import LienHe from '@/LienHe'
import TinTuc from '@/TinTuc'
import MyAccount from '@/MyAccount'

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
    },
    {
      path: '/phu-kien/',
      name: 'PhuKien',
      component: PhuKien
    },
    {
      path: '/lien-he/',
      name: 'LienHe',
      component: LienHe
    },
    {
      path: '/tin-tuc/',
      name: 'TinTuc',
      component: TinTuc
    },
    {
      path: '/my-account/',
      name: 'MyAccount',
      component: MyAccount
    }
  ]
})

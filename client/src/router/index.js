import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import Cart from '@/Cart'
import Thankyou from '@/Thankyou'

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
      path: '/thankyou',
      name: 'Thankyou',
      component: Thankyou
    }
  ]
})

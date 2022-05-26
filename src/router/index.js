import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomeMall.vue'
import Index from '@/views/IndexMall.vue'
import Product from '@/views/ProductMall.vue'
import Detail from '@/views/DetailProduct.vue'
import Cart from '@/views/CartMall.vue'
import Order from '@/views/order/OrderMall.vue'
import OrderConfirm from '@/views/order/OrderConfirm.vue'
import OrderPay from '@/views/order/OrderPay.vue'
import OrderList from '@/views/order/OrderList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: Index
      },
      {
        path: 'product/:id',
        component: Product
      },
      {
        path: 'details/:id',
        component: Detail
      }
    ]
  },
  {
    path: '/cart',
    component: Cart
  },
  {

    path: '/order',
    component: Order,
    children: [
      {
        path: 'list',
        component: OrderList
      },
      {
        path: 'confirm',
        component: OrderConfirm
      },
      {
        path: 'pay',
        component: OrderPay
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Search from '../views/Search.vue'
import Account from '../views/Account.vue'
import Checkout from '../views/Checkout.vue'
import Orders from '../views/Orders.vue'
import Foods from '../views/Foods.vue'
import Drinks from '../views/Drinks.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: Drinks
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

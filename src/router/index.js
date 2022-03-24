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
import Restaurant from '../views/Restaurant.vue'
import Category from '../views/Category.vue'
import Categories from '../views/Categories.vue'
import Products from '../views/Products.vue'
import store from '../store'

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
    path: '/search/:searchString',
    name: 'Search',
    component: Search
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
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/restaurants/:id',
    name: 'Restaurant',
    component: Restaurant
  },
  {
    path: '/categories/:id',
    name: 'Category',
    component: Category
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

var protectedRoutes = [
  '/cart',
  '/checkout',
  '/account',
  '/orders'
]

router.beforeEach((to, from, next) => {
  var loggedIn = store.getters.loggedIn
  var path = to.fullPath
  store.state.overlay = false
  if (to.fullPath in protectedRoutes && !store.state.token){
    next('/');
  }
  if (!loggedIn && protectedRoutes.indexOf(path)!=-1) {
    next('/signin')
  }
  if ((path=='/signup' || path=='/signin') && loggedIn) {
    next('/')
  }
  next()
  window.scrollTo(0, 0);
})

export default router
<template>
  <div>
    <h3 align='center' class="pa-3" v-if='showHeading'>Products</h3>
    <div class="d-flex flex-wrap justify-center">
        <Product v-for='(product, index) in products' :key="index" 
          :name='product.name' 
          :discount='product.discount'
          :price='product.price'
          :image='product.image'/>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'
export default {
  props: {
    showHeading: {
      type: Boolean,
      default: false, 
    },
    products: {
      type: Array,
      default: () => [
        {name: 'Hot Chicken Burger', description: '', price:20000, discount:20, image: require('@/assets/burger.jpg')},
        {name: 'Chicken Burger', description: '', price:20000, discount:20, image: require('@/assets/burger.jpg')},
        {name: 'Burger', description: '', price:20000, discount:20, image: require('@/assets/burger.jpg')} 
      ]
    },
  },
    components: {
        Product,
    },
}
</script>

<style>

</style>
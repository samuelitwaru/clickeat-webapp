<template>
  <div>
    <!-- <v-container fluid> -->
    <!-- </v-container> -->
    <h2 align='center' class="pa-3" v-if='title'>{{title}}</h2>
    <div class="d-flex flex-wrap justify-center">
        <product v-for='(product, index) in products' :key="index" 
          :name='product.name' 
          :price='product.price'
          :image='product.product_picture'
          :product='product'
          :restaurant='product.resturant'
          :promotional_price='product.promotional_price' />
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'
export default {
  props: {
    title: {
      type: String,
      default: '', 
    },
    products: {
      type: Array,
      default: () => [
        
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
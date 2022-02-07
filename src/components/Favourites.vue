<template>
  <div>
    <h3 align='center' class="pa-3">Favourites</h3>
    <v-sheet class="d-flex justify-space-around">
        <v-slide-group show-arrows class="pa-2">
        <v-slide-item v-for='(product, index) in favourites' :key="index" class="mx-2">
            <Product 
              :name='product.name' 
              :discount='product.discount'
              :price='product.price'
              :image='product.image'/>
        </v-slide-item>
        </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import Product from '@/components/Product';

export default {
    components: {
      Product,
    },
    data() {
      return {
        favourites: [
          {name: 'Hot Chicken Burger', description: '', price:20000, discount:20, image: require('@/assets/burger.jpg')},
          {name: 'Chicken Burger', description: '', price:20000, discount:20, image: require('@/assets/burger.jpg')},
        ]
      }
    },
}
</script>

<style>

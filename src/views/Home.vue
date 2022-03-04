<template>
  <div>
    <banner />
    <v-container class="">
      <categories />
      <restaurants />
      <products title='Top Selling' :products='products'/>
    <app-alert />
    <subcription-modal />
    </v-container>
  </div>
</template>

<script>
import Banner from '@/components/Banner';
import Categories from '@/components/Categories';
import Restaurants from '@/components/Restaurants';
import Products from '@/components/Products';
import AppAlert from '../components/AppAlert.vue';
import SubcriptionModal from '../components/SubcriptionModal.vue';
// import Favourites from '@/components/Favourites';

export default {
  components: {
    Banner,
    Categories,
    Restaurants,
    Products,
    AppAlert,
    SubcriptionModal
    // Favourites,
  },

  data() {
    return {
      products: []
    }
  },

  created () {
    this.getTopSellingProducts()
  },

  methods: {
    getTopSellingProducts() {
      this.$http.get(`${this.$apiUrl}/top_selling_products?platform=web`)
      .then(response => {
        this.products = response.data
      });  
    },
  },
}
</script>

<style>

</style>
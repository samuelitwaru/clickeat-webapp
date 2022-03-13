<template>
  <div>
    <banner />
    <v-container class="">
      <categories />
      <restaurants />
      <products title="Our Products" :products="sampleProducts" />
      <app-alert />
      <subcription-modal />
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import Products from "@/components/Products";
import AppAlert from "../components/AppAlert.vue";
import SubcriptionModal from "../components/SubcriptionModal.vue";
// import Favourites from '@/components/Favourites';

export default {
  components: {
    Banner,
    Categories,
    Restaurants,
    Products,
    AppAlert,
    SubcriptionModal,
    // Favourites,
  },

  data() {
    return {
      products: [],
    };
  },

  created() {
    this.getTopSellingProducts();
  },

  computed: {
    sampleProducts() {
      return this.shuffle(this.products).slice(0, 10);
    },
  },

  methods: {
    getTopSellingProducts() {
      this.$http
        .get(`${this.$apiUrl}/home_products?platform=web`)
        .then((response) => {
          this.products = response.data.all_products;
        });
    },

    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    },
  },
};
</script>

<style>
</style>
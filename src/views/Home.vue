<template>
  <div>
    <banner />
    <!-- <v-container class="mx-0" style="width:100%"> -->
    <div>
      <products title="Top Selling Products" :products="sampleProducts" />
      <div align="center">
        <router-link to="/products" style="font-weight: bold" align="center"
          >More..</router-link
        >
      </div>
    </div>

    <categories />
    <restaurants />
    <!-- <v-divider class="mx-0 my-4"></v-divider> -->
    <v-row>
      <v-col cols="12" sm="12">
        <div align="center">
          <steps />
        </div> 
      </v-col>
    </v-row>
    <why />
    <app-alert />
    <subcription-modal />
    <!-- </v-container> -->
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import Products from "@/components/Products";
import AppAlert from "../components/AppAlert.vue";
import SubcriptionModal from "../components/SubcriptionModal.vue";
import Why from '../components/Why.vue';
import Steps from '../components/Steps.vue';
// import Favourites from '@/components/Favourites';

export default {
  components: {
    Banner,
    Categories,
    Restaurants,
    Products,
    AppAlert,
    SubcriptionModal,
    Why,
    Steps,
    // Favourites,
  },

  data() {
    return {
      products: [],
      sampleProducts: [],
    };
  },

  created() {
    this.getTopSellingProducts();
  },

  methods: {
    getTopSellingProducts() {
      this.$http
        .get(`${this.$apiUrl}/home_products?platform=web`)
        .then((response) => {
          this.products = response.data.top_selling_products;
          this.setSampleProducts();
          setInterval(this.setSampleProducts, 30000);
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

    setSampleProducts() {
      this.sampleProducts = this.shuffle(this.products).slice(0, 4);
    },
  },
};
</script>

<style>
</style>
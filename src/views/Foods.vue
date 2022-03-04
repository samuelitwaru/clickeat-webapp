<template>
  <div>
    <loading-overlay :overlay='overlay' />
    <h3 align="center" class="pa-2">Foods</h3>
    <v-row justify="space-around">
      <v-col cols="12" sm="10" md="8">
        <v-sheet  class="py-4 px-1">
          <v-chip-group active-class="primary--text">
            <v-chip v-for="category in categories" :key="category">
              {{ category }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>

    <products />
  </div>
</template>

<script>
import LoadingOverlay from '../components/LoadingOverlay.vue';
import Products from '../components/Products.vue';
export default {
  components: { Products, LoadingOverlay },
  data() {
    return {
      overlay: false,
      categories: ['Snacks', 'Burgers', 'Chicken Tastys', 'Fish', 'Beef', 'Pork', 'Pizza', 'Goat Meat', 'Rice'],
      foods: []
    }
  },
  created () {
    this.overlay = true
    this.getCategories();
  },

  methods: {
    getCategories() {
      this.$http.get(`${this.$apiUrl}/cat_products?platform=web`)
      .then((response) => {
        console.log(response.data)
        if(this.categories.length){
          // this.getDrinksByCategory(this.categories[0].sub_category_id)
        }
        this.overlay = false
      });
    },

    // getDrinksByCategory(categoryId) {
    //   this.$http.get(`${this.$apiUrl}/sub_cat_products`)
    //   .then((response) => {
    //     this.drinks = response.data[0].products
    //     console.log(this.drinks);
    //   });
    // }
  }
};
</script>

<style>
</style>
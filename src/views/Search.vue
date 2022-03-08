<template>
  <div>
    <div class="pa-2">
      <v-row>
        <v-col cols="10">
          <v-text-field
            autofocus
            v-model="searchString"
            outlined
            placeholder="Search Your Meal"
          >
          </v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn color="primary" x-large @click="searchProducts()"
            >SEARCH</v-btn
          >
        </v-col>
      </v-row>
    </div>
    <Products />
    <products v-if='products.length' :products="products" />
    <p v-else align='center'>No Products Found</p>
  </div>
</template>

<script>
import Products from "../components/Products.vue";
export default {
  components: {
    Products,
  },

  data() {
    return {
      products: [],
      searchString: "",
    };
  },

  created() {
    this.searchProducts();
  },

  methods: {
    searchProducts() {
      this.$store.state.overlay = true;
      this.$http
        .get(
          `${this.$apiUrl}/searched_products?platform=web&searchString=${this.searchString}`
        )
        .then((response) => {
          this.products = response.data;
          this.$store.state.overlay = false;
        });
    },
  },
};
</script>

<style scoped>
</style>
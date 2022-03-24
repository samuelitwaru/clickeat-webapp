<template>
  <div>
    <div class="pa-2">
      <v-text-field
        autofocus
        label="eg Chicken stew"
        v-model="searchString"
        outlined
        placeholder="eg pizza"
        @keyup.enter="search()"
      >
        <template slot="append">
          <v-icon>search</v-icon>
        </template>
      </v-text-field>
    </div>
    <Products />
    <products v-if="products.length" :products="products" />
    <p v-else align="center">No Products Found</p>
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
      searchString: this.$route.params.searchString,
    };
  },

  created() {
    this.searchProducts();
  },

  methods: {
    search() {
      this.$router.push({
        name: "Search",
        params: { searchString: this.searchString },
      });
      this.searchProducts();
    },
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
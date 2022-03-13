<template>
  <div>
    <div class="pa-2">
      <v-row>
        <v-col cols="9">
          <v-text-field
            autofocus
            v-model="searchString"
            outlined
            placeholder="eg Goat stew"
            @keyup.enter='search()'
          >
          </v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn color="primary" x-large @click="searchProducts()"
            ><v-icon>mdi-search</v-icon></v-btn
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
      searchString: this.$route.params.searchString,
    };
  },

  created() {
    this.searchProducts();
  },

  methods: {
    search(){
			this.$router.push({name:'Search', params: {searchString:this.searchString}})
      this.searchProducts()
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
<template>
  <div>
    <products :products="products" />
  </div>
</template>

<script>
import Products from "../components/Products.vue";
export default {
  components: { Products },
  data() {
    return {
      products: [],
    };
  },
  created () {
      this.getProducts();
  },
  methods: {
    getProducts() {
      this.$store.state.overlay = true;
      this.$http
        .get(`${this.$apiUrl}/home_products?platform=web`)
        .then((response) => {
          this.products = response.data.all_products;
          this.$store.state.overlay = false;
        });
    },
  },
};
</script>

<style>
</style>
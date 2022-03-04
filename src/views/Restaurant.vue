<template>
  <div>
    <h3 align="center">Restaurant</h3>
    <div class="d-flex justify-center">
        <v-chip-group active-class="primary--text">
            <v-chip
                v-for="category in categories"
                :key="category.sub_category"
                @click="getCategory(category.sub_category)"
                class="justify-center"
            >
                {{ category.sub_category }}
            </v-chip>
        </v-chip-group>
    </div>
    <products :products="products"></products>
  </div>
</template>

<script>
import Products from "../components/Products.vue";
export default {
  components: { Products },
  data() {
    return {
      products: [],
      categories: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${this.$apiUrl}/products/${this.$route.params.id}?platform=web`)
        .then((response) => {
          console.log(response.data);
          this.categories = response.data;
          this.products = this.categories[0].products;
        });
    },

    getCategory(index) {
      console.log(index);
    },
  },
};
</script>

<style>
</style>
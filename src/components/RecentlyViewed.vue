<template>
  <div>
    <h3 align="center" class="pa-3">Recently Viewed</h3>
    <v-sheet class="d-flex justify-space-around">
      <v-slide-group :show-arrows="$vuetify.breakpoint.mdAndUp" class="pa-2">
        <v-slide-item
          v-for="product in products"
          :key="product.product_id"
          class="mx-2"
        >
            <product
              :id="product.product_id"
              :name="product.name"
              :price="product.price"
              :image="product.product_picture"
              :product="product"
              :promotional_price="product.promotional_price"
              :restaurant="product.resturant"
            />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  components: { Product },
  name: "RecentlyViewd",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getRecentlyViewed();
  },
  methods: {
    getRecentlyViewed() {
      this.products = JSON.parse(
        localStorage.getItem("recentlyViewed", "[]")
      ).reverse();
    },
  },
};
</script>

<style>
</style>
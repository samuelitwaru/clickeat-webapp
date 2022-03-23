<template>
  <div>
    <div v-if="restaurant">
      <div class="mx-auto" outlined>
        <v-list-item three-line>
          <v-img
            class="rounded-circle"
            :src="
              $staticUrl +
              '/business_profile_picture/' +
              restaurant.business_profile_picture
            "
            max-width="80px"
          >
          </v-img>
          <v-list-item-content class="px-3">
            <v-list-item-title>
              {{ restaurant.business_name }}
            </v-list-item-title>
            <v-list-item-subtitle
              >Open from {{ restaurant.operation_start_time }} to
              {{ restaurant.operation_stop_time }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </div>
    </div>
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
      restaurant: null,
    };
  },
  created() {
    this.getProducts();
    this.getRestaurant();
  },
  computed: {
    status() {
      if (this.restaurant.operational_status) {
        return "open";
      }
      return "closed";
    },
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${this.$apiUrl}/products/${this.$route.params.id}?platform=web`)
        .then((response) => {
          this.categories = response.data;
          this.products = this.categories[0].products;
        });
    },

    getRestaurant() {
      var restaurantId = this.$route.params.id;
      this.$http
        .get(`${this.$apiUrl}/get_restaurant/${restaurantId}?platform=web`)
        .then((response) => {
          this.restaurant = response.data;
          console.log(this.restaurant);
        });
    },

    getCategory(name) {
      var filtered = this.categories.filter(
        (category) => category.sub_category == name
      );
      if (filtered.length) {
        this.products = filtered[0].products;
      }
    },
  },
};
</script>

<style>
</style>
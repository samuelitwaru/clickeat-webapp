<template>
  <div>
    <h3 align="center" class="pa-3">Restaurants</h3>
    <v-sheet class="d-flex justify-space-around">
      <v-slide-group show-arrows class="pa-2">
        <v-slide-item
          v-for="(restaurant, index) in restaurants"
          :key="index"
          class="mx-2"
        >
          <router-link :to="`/restaurants/${restaurant.id}`">
            <div align="center" width="80" class="border pa-2">
              <v-img
                class="rounded-circle border"
                :src="
                  $staticUrl +
                  '/business_profile_picture/' +
                  restaurant.business_profile_picture
                "
                width="80"
                height="80"
              >
              </v-img>
              <p>{{ restaurant.business_name }}</p>
            </div>
          </router-link>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      restaurants: [],
    };
  },

  created() {
    this.getRestaurants();
  },

  methods: {
    getRestaurants() {
      this.$http
        .get(`${this.$apiUrl}/restaurants?platform=web`)
        .then((response) => {
          this.restaurants = response.data.restaurants;
        });
    },
  },
};
</script>

<style>
</style>
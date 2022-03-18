<template>
  <div class="curved-top-left py-4 my-4 restaurants">
    <h3 align="center" class="pa-3">Restaurants</h3>
    <!-- <v-sheet class="d-flex justify-space-around rounded-circle">
      <v-slide-group show-arrows class="pa-2">
        <v-slide-item
          v-for="(restaurant, index) in restaurants"
          :key="index"
          class="mx-2"
        > -->
    <div class="d-flex flex-wrap justify-center">
      <router-link
        :to="`/restaurants/${restaurant.id}`"
        v-for="(restaurant, index) in restaurants"
        :key="index"
      >
        <v-card
          align="center"
          width="120"
          height="150"
          class="border pa-1 ma-2"
        >
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
        </v-card>
      </router-link>
    </div>
    <!-- </v-slide-item>
      </v-slide-group>
    </v-sheet> -->
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
.restaurants {
  background-color: #ff4800;
}
</style>
<template>
  <div class="py-4 my-4">
    <v-container>
      <v-row>
        <v-col class="d-flex my-auto" cols="12" md="6">
          <v-img
            src="@/assets/food-location.svg"
            class="my-auto mx-2"
            width="120"
          ></v-img>
          <p
            align="center"
            class="my-auto"
            style="font-size: 1.5rem; color: #ff4800"
          >
            Order local food, fast food, fresh food and groceries from the nearest restuarant or grocery store
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex flex-wrap justify-center curved-top-left">
            <router-link
              :to="`/restaurants/${restaurant.id}`"
              v-for="(restaurant, index) in restaurants.slice(0, 4)"
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
          <div align="center">
            <router-link
              to="/restaurants"
              style="font-weight: bold"
              align="center"
              >More..</router-link
            >
          </div>
        </v-col>
      </v-row>
    </v-container>

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
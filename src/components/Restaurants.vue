<template>
  <div class="py-4 my-4">
    <v-container>
      <v-row>
        <v-col class="d-flex my-auto" cols="12" md="4">
          <v-img
            src="@/assets/food-location.svg"
            class="my-auto mx-2"
            width="120"
          ></v-img>
          <p
            align="center"
            class="my-auto"
            style="font-size: 1.5rem; color: #000000; font-family: courier;"
          >
            Order local food, fast food, fresh food and groceries from the nearest restuarant or grocery store
          </p>
        </v-col>
        <v-col cols="12" md="8">
          <div class="d-flex flex-wrap justify-center curved-top-left">
            <router-link
              :to="`/restaurants/${restaurant.id}`"
              v-for="(restaurant, index) in restaurants.slice(0, 5)"
              :key="index"
            >
              <v-card
                align="center"
                width="120"
                height="120"
                class="ma-2"
              >
                <v-img
                  :src="
                    $staticUrl +
                    '/business_profile_picture/' +
                    restaurant.business_profile_picture
                  "
                  width="120"
                  height="120"
                  style="color:#ffffff;"
                >
                 <h5 class="content">{{ restaurant.business_name }}</h5>
                </v-img>
                <!-- <v-card-text>#FF5722</v-card-text> -->
                <!-- <v-card-text style="color:#000000; font-weight: bold; font-family:courier; font-size:10px;">
                  {{ restaurant.business_name }}
                </v-card-text> -->
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

.content {
  position: absolute; /* Position the background text */
  bottom: 0; /* At the bottom. Use top:0 to append it to the top */
  background: rgba(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1; /* grey text */
  width: 100%;
  padding: 5px;

}
</style>
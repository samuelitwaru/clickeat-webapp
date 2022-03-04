<template>
  <div>
    <h3 align="center" class="pa-2">Restaurants</h3>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="restaurant in restaurants"
            :key="restaurant.name"
            cols="12"
            md="4"
          >
            <v-item>
              <restaurant-2
                :id="restaurant.id"
                :name="restaurant.business_name"
                :openFrom="restaurant.operation_start_time"
                :openTo="restaurant.operation_stop_time"
                :isOpen="restaurant.operational_status"
                :image="restaurant.business_profile_picture"
              />
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import Restaurant2 from "../components/Restaurant2.vue";
export default {
  components: {
    Restaurant2,
  },
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
<template>
  <div>
    <h3 align="center" class="pa-2">Restaurants</h3>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="restaurant in restaurants" :key="restaurant.name" cols="12" md="4">
            <v-item>
              <restaurant-2 :name='restaurant.name' :openFrom='restaurant.openFrom' :openTo='restaurant.openTo' :status='restaurant.status' />
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import Restaurant2 from '../components/Restaurant2.vue';
export default {
  components: {
    Restaurant2,
  },
  data() {
    return {
      restaurants: [
        {name: 'Bamboo Village', openFrom: '08:00', openTo: '21:00', status: 'Open'},
        {name: 'Fruit and Vegetable Shop', openFrom: '08:00', openTo: '21:00', status: 'Open'},
        {name: 'Maisha', openFrom: '08:00', openTo: '21:00', status: 'Open'},
        {name: 'Town Grill & BBQ', openFrom: '08:00', openTo: '21:00', status: 'Open'},
      ]
    }
  }
}
</script>

<style>
</style>
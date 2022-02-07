<template>
  <div>
    <h3 align="center" class="pa-2">Foods</h3>
    <v-row justify="space-around">
      <v-col cols="12" sm="10" md="8">
        <v-sheet  class="py-4 px-1">
          <v-chip-group active-class="primary--text">
            <v-chip v-for="category in categories" :key="category">
              {{ category }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>

    <products />
  </div>
</template>

<script>
import Products from '../components/Products.vue';
export default {
  components: { Products },
  data() {
    return {
      categories: ['Snacks', 'Burgers', 'Chicken Tastys', 'Fish', 'Beef', 'Pork', 'Pizza', 'Goat Meat', 'Rice'],
      foods: []
    }
  },
};
</script>

<style>
</style>
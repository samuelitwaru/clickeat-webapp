<template>
  <div>
        <h3 align='center' class="pa-3">Restaurants</h3>
        <v-sheet class="d-flex justify-space-around">
            <v-slide-group show-arrows class="pa-2">
            <v-slide-item v-for="(restaurant, index) in restaurants" :key="index" class="mx-2">
                <restaurant :name='restaurant.name' />
            </v-slide-item>
            </v-slide-group>
        </v-sheet>
  </div>
</template>

<script>
import Restaurant from '@/components/Restaurant.vue'
export default {
  components: { Restaurant },
    data() {
        return {
            restaurants: [
                {name: 'Bambooooooooooo'}
            ]
        }
    },
}
</script>

<style>

</style>
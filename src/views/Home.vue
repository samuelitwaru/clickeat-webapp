<template>
  <div>
    <Banner />
    <v-container class="pa-0">
      <v-row>
        <v-col cols='12' md='6'>
          <Categories />
        </v-col>
        <v-col  cols='12' md='6'>
          <Restaurants />
        </v-col>
      </v-row>
    </v-container>
    <Products showHeading='true'/>
    <Favourites />
  </div>
</template>

<script>
import Banner from '@/components/Banner';
import Categories from '@/components/Categories';
import Restaurants from '@/components/Restaurants';
import Products from '@/components/Products';
import Favourites from '@/components/Favourites';

export default {
  components: {
    Banner,
    Categories,
    Restaurants,
    Products,
    Favourites,
  },
}
</script>

<style>

</style>
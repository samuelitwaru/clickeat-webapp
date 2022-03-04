<template>
  <v-footer color="black lighten-1" class="white--text mt-8">
    <!-- <v-row > -->
      <v-col>
        <h4 red lighten-5>About</h4>
        <hr class="my-2" width="50%;" />
        <p class="ma-auto">
          We make it easy to catch your meal anytime anywhere.
        </p>
        <p class="ma-auto">
          <span>&copy;</span> Clickeat 2022
        </p>
      </v-col>
      <v-col>
        <h4 red lighten-5>Contacts</h4>
        <hr class="my-2" width="50%;" />
        <p class="ma-auto">0785857000 <a href="tel:0785857000">Call</a></p>
        <p class="ma-auto">0752688849 <a href="tel:0752688849">Call</a></p>
        <p class="ma-auto">0787789799 <a href="tel:0787789799">Call</a></p>
        <p class="ma-auto"><a href="mailto:amobittechnologiez@gmail.com">amobittechnologiez@gmail.com</a></p>
      </v-col>
      
      <v-col>
        <h4 red lighten-5>Go to</h4>
        <hr class="my-2" width="50%;" />
        <p class="ma-auto"><router-link to="/restaurants">Restaurants</router-link></p>
        <p class="ma-auto"><router-link to="/drinks">Drinks</router-link></p>
        <p class="ma-auto"><router-link to="/cart">Cart</router-link></p>
        <p class="ma-auto"><router-link to="/orders">Orders</router-link></p>
        <p class="ma-auto"><router-link to="/account">Account</router-link></p>
      </v-col>
    <!-- </v-row> -->
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
</style>
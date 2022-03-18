<template>
  <v-footer color="black lighten-1" class="white--text mt-8">
    <div class="curved-top">hello</div>
    <v-col cols="12" class="d-flex justify-center">
      <a href="https://facebook.com/amobittechnologies" class="mx-4"
        ><v-icon color="primary">mdi-facebook</v-icon></a
      >
      <a href="https://twitter.com/Clickeat_ug" class="mx-4"
        ><v-icon color="primary">mdi-twitter</v-icon></a
      >
      <a href="https://wa.me/0785857000" class="mx-4"
        ><v-icon color="primary">mdi-whatsapp</v-icon></a
      >
      <a href=""><v-icon color="primary" class="mx-4">mdi-instagram</v-icon></a>
    </v-col>
    <v-col cols="12" sm="4">
      <h4 red lighten-5>Trending Categories</h4>
      <hr class="my-2" width="50%;" />
      <p class="ma-auto" v-for="category in categories" :key="category.id">
        <router-link :to="`/categories/${category.id}`">{{ category.name }}</router-link>
      </p>
    </v-col>
    <v-col cols="12" sm="4">
      <h4 red lighten-5>Contacts</h4>
      <hr class="my-2" width="50%;" />
      <p class="ma-auto">
        <v-icon color="white">mdi-whatsapp</v-icon> 0785857000
      </p>
      <p class="ma-auto">
        <v-icon color="white">mdi-phone</v-icon> 0752688849
      </p>
      <p class="ma-auto">
        <v-icon color="white">mdi-phone</v-icon> 0787789799
      </p>
      <p class="ma-auto">
        <v-icon color="white">mdi-email-outline</v-icon>
        <a href="mailto:amobittechnologiez@gmail.com"
          >amobittechnologiez@gmail.com</a
        >
      </p>
    </v-col>

    <v-col cols="12" sm="4">
      <h4 red lighten-5>Quick Links</h4>
      <hr class="my-2" width="50%;" />
      <p class="ma-auto">
        <router-link to="/restaurants">Restaurants</router-link>
      </p>
      <p class="ma-auto"><router-link to="/drinks">Drinks</router-link></p>
      <p class="ma-auto"><router-link to="/cart">Cart</router-link></p>
      <p class="ma-auto"><router-link to="/orders">Orders</router-link></p>
      <p class="ma-auto"><router-link to="/account">Account</router-link></p>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <p>Clickeat is a product of Amobit Technologies &copy;Clickeat</p>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  computed: {
    categories() {
      var categories = this.$store.state.categories;
      return categories.slice(0, 5);
    },
  },
};
</script>

<style>
.curved-bottom-left {
  width: 100%;
  border-bottom-left-radius: 10%;
}

.curved-bottom-right {
  width: 100%;
  border-bottom-right-radius: 10%;
}

.curved-top-right {
  width: 100%;
  border-top-right-radius: 10%;
}

.curved-top-left {
  width: 100%;
  border-top-left-radius: 10%;
}
</style>
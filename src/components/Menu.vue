<template>
  <div>
    <loading-overlay :overlay="overlay" />
    <signin-modal />
    <v-app-bar app color="primary">
      <router-link to="/">
        <div>
          <img width="40" src="@/assets/logo-200x200.png" />
        </div>
      </router-link>
      <router-link to="/">
        <v-toolbar-title class="white--text">Clickeat</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/account">
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/cart">
        <v-btn icon>
          <v-icon>mdi-cart</v-icon> <span></span>
          <v-badge color="black" :content="cartCount" v-if="cartCount">
          </v-badge>
        </v-btn>
      </router-link>

      <v-btn v-if="!drawer" icon @click="drawer = true">
        <v-icon>mdi-hamburger</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app right temporary>
      <v-list dense>
        <router-link v-for="(link, index) in links" :key="index" :to="link.to">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <!-- <v-btn>Hello</v-btn> -->
        <v-list-item link @click="logout">
          <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LoadingOverlay from "./LoadingOverlay.vue";
import SigninModal from "./SigninModal.vue";
export default {
  name: "Menu",
  components: { LoadingOverlay, SigninModal },
  data() {
    return {
      drawer: false,
      links: [
        { id: 1, title: "Home", to: "/", icon: "mdi-home" },
        { id: 4, title: "Restaurants", to: "/restaurants", icon: "mdi-food" },
        { id: 4, title: "Drinks", to: "/drinks", icon: "mdi-bottle-wine" },
        // { id: 5, title: "Foods", to: "/foods", icon: "mdi-food-apple" },
        { id: 2, title: "Cart", to: "/cart", icon: "mdi-cart" },
        {
          id: 3,
          title: "Orders",
          to: "/orders",
          icon: "mdi-truck-check-outline",
        },
        { id: 6, title: "Account", to: "/account", icon: "mdi-account" },
      ],
    };
  },

  created() {
    setInterval(this.getCartProducts, 5000);
  },

  computed: {
    overlay() {
      return this.$store.state.overlay;
    },
    cartCount() {
      return this.$store.state.cartProducts.length;
    },
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.drawer = false;
      if (this.$router.history.current.name != "Home") {
        if(this.$route.path !== '/') this.$router.replace({ name: "Home" });
      }
    },

    getCartProducts() {
      var customer_id = this.$store.getters.userId;
      if (customer_id) {
        this.$http
          .get(`${this.$apiUrl}/cart_operations/${customer_id}?platform=web`)
          .then((response) => {
            this.$store.dispatch("setCartProducts", response.data.cart_items);
          });
      }
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
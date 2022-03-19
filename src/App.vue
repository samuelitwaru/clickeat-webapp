<template>
  <v-app>
    <Menu />

    <v-main>
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Menu from "./components/Menu.vue";

export default {
  name: "Home",

  components: {
    Menu,
    Footer,
  },
};
</script>

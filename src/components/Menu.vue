<template>
  <div>
    <v-app-bar app>
      <router-link to="/">
        <div>
          <img  width="50" src='@/assets/logo-200x200.png' />
        </div>
      </router-link>
      <router-link to="/">
      <v-toolbar-title>Clickeat</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <router-link to="/account">
        <v-btn  icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/cart">
        <v-btn icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </router-link>

      <v-btn icon @click="drawer=true">
        <v-icon>mdi-hamburger</v-icon>
      </v-btn>      
    </v-app-bar>

    <v-navigation-drawer
        v-model='drawer'
        app
        right>

        <v-list dense>
            <router-link v-for='(link, index) in links' :key='index' :to='link.to'>
              <v-list-item link>
                <v-list-item-icon>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{link.title}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      drawer: false,
      links: [
        {id: 1, title: 'Home', to: '/', icon: 'mdi-home'},
        {id: 4, title: 'Restaurants', to: '/restaurants', icon: 'mdi-food'},
        {id: 4, title: 'Drinks', to: '/drinks', icon: 'mdi-bottle-wine'},
        {id: 5, title: 'Foods', to: '/foods', icon: 'mdi-food-apple'},
        {id: 2, title: 'Cart', to: '/cart', icon: 'mdi-cart'},
        {id: 3, title: 'Orders', to: '/orders', icon: 'mdi-truck-check-outline'},
        {id: 6, title: 'Account', to: '/account', icon: 'mdi-account'},
      ]
    }
  },

}
</script>

<style>
a {
  text-decoration: none;
}

</style>
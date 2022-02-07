<template>
<v-app>
  <Menu />

  <v-main>
    <v-container fluid class='pa-0'>
      <router-view></router-view>
    </v-container>
  </v-main>

  <Footer />
  
</v-app>
</template>

<script>
  import Menu from '@/components/Menu'
  import Footer from '@/components/Footer'

  export default {
    name: 'Home',

    components: {
      Menu,
      Footer,
    },
  }
</script>

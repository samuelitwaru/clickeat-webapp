<template>
    <div>
      <!-- <h3 align="center" class="pa-2">Your Account</h3> -->
      <v-tabs fixed-tabs v-model='tab'>
        <v-tab v-for="item in items" :key="item">{{item}}</v-tab>
      </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <profile />
      </v-tab-item>
      <v-tab-item>
        <addresses />
      </v-tab-item>
      <v-tab-item>
        <password />
      </v-tab-item>
    </v-tabs-items>
    </div>
</template>

<script>
import Addresses from '../components/Addresses.vue';
import Password from '../components/Password.vue';
import Profile from '../components/Profile.vue';
export default {
  components: { 
    Profile,
    Password,
    Addresses
  },
  
  data() {
    return {
      tab: 1,
      items: [
        'Profile', 'Address', 'Password'
      ],
      text: 'lorem'
    }
  },
};
</script>

<style>
</style>
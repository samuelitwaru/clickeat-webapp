<template>
  <div>
    <loading-overlay :overlay='overlay'/>
    <v-card class="mx-auto my-4 pa-4" width="400px">
      <h3 align="center" class="pa-3">SIGNUP</h3>
      <v-form ref="form">
        <v-text-field v-model="data.names" type="text" label="Your Name" required></v-text-field>
        <v-text-field v-model="data.email" label="Your E-mail" required></v-text-field>
        <v-text-field v-model="data.contact" label="Your Contact" required></v-text-field>

        <v-text-field name="password"  v-model="data.password" label="Enter your password" type="password"></v-text-field>
        <v-text-field name="rePssword"  v-model="data.rePassword" label="Confirm your password" type="password"></v-text-field>

        <div align="center">
          <v-btn color="primary" class="mr-4" @click='signup'>Signup</v-btn>

          <p class="mt-4" >
            <small>Already have an Account ?</small> 
            <router-link to='/signin'>
            <v-btn plain color="primary" class="mr-4">Signin</v-btn>
            </router-link>
          </p>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';
import LoadingOverlay from '@/components/LoadingOverlay.vue';


export default {
  components: {
    LoadingOverlay
  },
  data() {
    return {
      // host: 'http://127.0.0.1:5000',
      // host: 'http://192.168.42.49:5000',
      overlay: false,
      data: {
        names: "Samuel Itwaru",
        email: 'samuelitwaru@gmail.com',
        contact: '0781902516',
        profile_picture: '',
        password: '123',
        rePassword: '123',
      }
    };
  },

  created () {
    axios.get(`${this.$host}/home_products?platform=web`)
    .then(response => {
      console.log(response.data)
    })
  },

  methods: {
    signup() {
      console.log(this.data);
      this.overlay = true;
      axios.post(
        `${this.$host}/register?platform=web`,
        this.data
      )
      .then(response => {
        console.log(response.data)
        this.overlay = false
      })
    },
  },
};
</script>

<style>
</style>
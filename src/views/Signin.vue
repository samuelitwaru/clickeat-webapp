<template>
  <div>
    <loading-overlay :overlay="overlay" />
    <v-card class="mx-auto my-4 pa-4" width="400px">
      <h3 align="center" class="pa-3">SIGNIN</h3>
      <v-alert transition="scale-transition" outlined dismissible type="error" v-model='alert'>
        User not found!
      </v-alert>

      <v-form ref="form">
        <v-text-field
          v-model="telephone"
          label="Telephone Number"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          name="password"
          label="Enter your password"
          type="password"
        ></v-text-field>

        <div align="center">
          <v-btn color="primary" class="mr-4" @click="signin">Signin</v-btn>

          <p class="mt-4">
            <small>Don't have an Account ?</small>
            <router-link to="/signup">
              <v-btn plain color="primary" class="mr-4">Signup</v-btn>
            </router-link>
          </p>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import LoadingOverlay from "../components/LoadingOverlay.vue";

export default {
  components: { LoadingOverlay },
  data() {
    return {
      host: "http://127.0.0.1:5000",
      // host: 'http://192.168.42.49:5000',
      overlay: false,
      telephone: "samuelitwaru@gmail.com",
      password: "123",
      alert: false
    };
  },
  methods: {
    signin() {
      var data = {
        telephone: this.telephone,
        password: this.password,
      };
      console.log(data);
      this.overlay = true;
      axios
        .post(`${this.$host}/customer_sign_in?platform=web`, data)
        .then((response) => {
          if (response.data) {
            this.$store.dispatch('login', response.data)
            this.$router.replace({name: 'Home'})
          } else {
            this.alert = true
          }
          this.overlay = false;
        });
    },
  },
};
</script>

<style>
</style>
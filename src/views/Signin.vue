<template>
  <div>
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
              <v-btn plain color="primary" class="mr-4" @click="$store.state.showSigninModal=false">Signup</v-btn>
            </router-link>
          </p>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {  },
  data() {
    return {
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
      this.$store.state.overlay = true;
      this.$http.post(`${this.$apiUrl}/customer_sign_in?platform=web`, data)
      .then((response) => {
        if (response.data) {
          this.$store.dispatch('login', response.data)
          if(this.$route.path === '/signin') this.$router.push({path: '/'})
        } else {
          this.alert = true
        }
        this.$store.state.overlay = false;
        this.$store.state.showSigninModal = false;
      });
    },
  },
};
</script>

<style>
</style>
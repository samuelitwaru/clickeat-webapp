<template>
  <div class="px-2">
    <v-card class="mx-auto my-4 pa-4" width="400px">
      <h3 align="center" class="pa-3 primary--text">SIGNUP</h3>
      <v-form ref="form">
        <v-text-field
          v-model="data.names"
          type="text"
          label="Your Name"
          required
          v-on:keyup.enter="signup"
        ></v-text-field>
        <v-text-field
          v-model="data.email"
          label="Your E-mail"
          required
          v-on:keyup.enter="signup"
        ></v-text-field>
        <v-text-field
          v-model="data.contact"
          label="Your Contact"
          required
          v-on:keyup.enter="signup"
        ></v-text-field>

        <v-text-field
          name="password"
          v-model="data.password"
          label="Enter your password"
          type="password"
          v-on:keyup.enter="signup"
        ></v-text-field>
        <v-text-field
          name="rePssword"
          v-model="data.rePassword"
          label="Confirm your password"
          type="password"
          v-on:keyup.enter="signup"
        ></v-text-field>

        <div align="center">
          <v-btn color="primary" class="mr-4" @click="signup">Signup</v-btn>

          <p class="mt-4">
            <small>Already have an Account ?</small>
            <router-link to="/signin">
              <v-btn plain color="primary" class="mr-4">Signin</v-btn>
            </router-link>
          </p>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: {
        names: "",
        email: "",
        contact: "",
        profile_picture: "",
        password: "",
        rePassword: "",
      },
    };
  },

  created() {},

  methods: {
    signup() {
      this.$store.state.overlay = true;
      this.$http
        .post(`${this.$apiUrl}/register?platform=web`, this.data)
        .then((response) => {
          console.log(response.data);
          this.$store.state.overlay = false;
          this.$router.replace({ name: "Home" });
        });
    },
  },
};
</script>

<style>
</style>
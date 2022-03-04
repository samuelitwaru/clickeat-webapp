<template>
  <v-card class="mx-auto my-4 pa-4" width="344px" outlined>
    <v-form ref="form">
      <v-text-field
        v-model="names"
        type="text"
        label="Your Name"
        required
      ></v-text-field>
      <v-text-field v-model="email" label="Your E-mail" required></v-text-field>
      <v-text-field
        v-model="contact"
        label="Your Contact"
        required
      ></v-text-field>

      <v-text-field
        v-model="second_contact"
        label="Second Contact"
        required
      ></v-text-field>

      <div>
        <v-btn color="primary" class="mr-4" @click="updateProfile"
          >Update</v-btn
        >
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      names: this.$store.state.user.names,
      email: this.$store.state.user.email,
      contact: this.$store.state.user.contact,
      second_contact: this.$store.state.user.second_contact,
    };
  },
  methods: {
    updateProfile() {
      var data = {
        names: this.names,
        email: this.email,
        contact: this.contact,
        secondContact: this.second_contact,
      };
      var customer_id = this.$store.state.user.customer_id
      this.$store.state.overlay = true;
      this.$http.put(`${this.$apiUrl}/update_info/${customer_id}?platform=web`, data)
      .then((response) => {
        console.log(response.data);
        this.$store.state.user = response.data
        this.$store.state.overlay = false;
      });
    },
  },
};
</script>

<style>
</style>
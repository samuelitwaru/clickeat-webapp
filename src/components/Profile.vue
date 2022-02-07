<template>
<v-card class="mx-auto my-4 pa-4" width="400px">
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

    <div>
      <v-btn color="primary" class="mr-4" @click="updateProfile">Update</v-btn>
    </div>
  </v-form>
</v-card>
</template>

<script>
export default {
  data() {
    return {
      names: "",
      email: "",
      contact: "",
    };
  },
  methods: {
    updateProfile() {
      console.log("updating profile..");
    },
  },
};
</script>

<style>
</style>
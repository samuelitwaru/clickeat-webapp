<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-card class="pa-0 ma-0">
      <v-container>
        <div class="d-flex justify-space-between">
          <h3>Join our Community</h3>
          <v-btn color="error" @click="dialog = false" outlined> &times; </v-btn>
        </div>
        <br />
        <!-- <v-alert border="left" colored-border color="primary" outlined> -->
          Subscribe to receive information about our exciting promotions and personalised offers for you.
        <!-- </v-alert> -->
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="email" label="Email"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="telephone" label="Telephone"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="subscribe()"> Subscribe </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    email: "",
    telephone: "",
  }),

  created() {
    setTimeout(() => {
      this.dialog = true;
    }, 10000);
  },

  methods: {
    subscribe() {
      if (this.email || this.telephone) {
        var data = {
          email: this.email,
          names: this.email,
          contact: this.telephone,
          password: "amobit",
        };
        this.$store.state.overlay = true;
        this.$http
          .post(`${this.$apiUrl}/register?platform=web`, data)
          .then((response) => {
            console.log(response.data);
            this.$store.state.overlay = false;
          });
      }
    },
  },
};
</script>

<style>
</style>
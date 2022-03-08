<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5 mx-2">Join Our Community</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-alert
            border="left"
            colored-border
            color="primary"
            outlined
          >
            Subscribe to receive information about promotional offers
            personalised for you.
          </v-alert>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Email *" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Telephone *" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false"> Subscribe </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),

  created() {
    setTimeout(() => {
      this.dialog = true;
    }, 10000);
  },
};
</script>

<style>
</style>
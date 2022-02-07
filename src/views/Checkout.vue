<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Delivery Address</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Payment</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Summary</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
        <div class="d-flex justify-end">
          
          <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
        <div class="d-flex justify-end justify-space-between">
          <v-btn color="primary" outlined @click="e1 = 1"> Back </v-btn>
          <div>
            
            <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
          </div>
        </div>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
        <div class="d-flex justify-end justify-space-between">
          <v-btn color="primary" outlined @click="e1 = 2"> Back </v-btn>
          <div>
            
            <v-btn color="primary" @click="e1 = 1"> CONFIRM </v-btn>
          </div>
        </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>

<style>
</style>
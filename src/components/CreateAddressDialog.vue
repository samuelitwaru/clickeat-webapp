<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on">+New Address</v-btn>
    </template>

    <template v-slot:default="dialog">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          New Address
        </v-card-title>
        <v-card-text>
          <v-container>
              <create-address-form />
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Cancel</v-btn>
          <v-btn color='primary' text >Save</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import CreateAddressForm from './CreateAddressForm.vue';
export default {
  components: { CreateAddressForm },};
</script>

<style>
</style>
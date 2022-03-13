<template>
  <div>
    <!-- <v-select
      v-model="selectedAddress"
      :items="addresses"
      item-text="village"
      item-value="id"
      label="Select Address"
      persistent-hint
      return-object
      single-line
    ></v-select> -->

    <v-card class="my-2" max-width="344" outlined v-if='selectedAddress'>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title> {{ selectedAddress.village }} </v-list-item-title>
          <div class="text--primary">{{ selectedAddress.sub_county }}</div>
          <div class="text--primary">{{ selectedAddress.county }}</div>
          <v-list-item-subtitle>{{
            selectedAddress.other_details
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    addresses: {
      type: Array,
    },
  },
  data() {
    return {
      selectedAddress: {},
    };
  },
  created() {
    // this.setDefaultAddress();
    console.log(this.addresses);
  },

  methods: {
    setDefaultAddress() {
      var filtered = this.addresses.filter((address) => address.is_default);
      console.log(this.addresses);
      if (filtered.length) {
        this.selectedAddress = filtered[0];
        return;
      }
      this.selectedAddress = {};
    },
  },
};
</script>

<style>
</style>
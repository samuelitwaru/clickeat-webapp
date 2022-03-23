<template>
<div>
    <v-container>
      <div class="d-flex justify-space-around mb-2">
        <create-address-dialog />
      </div>
      <v-row justify="center">
            <Address v-for='address in customerAddresses' :key='address.id'
              :id='address.id'
              :name="address.name"
              :county="address.county"
              :subcounty="address.sub_county"
              :village="address.village"
              :description="address.other_details"
              :isDefault='address.is_default'
            />
      </v-row>
    </v-container>
</div>
</template>

<script>
import Address from "./Address.vue";
import CreateAddressDialog from "./CreateAddressDialog.vue";
export default {
  components: { Address, CreateAddressDialog },
  data() {
    return {
      address: null,
      customerAddresses: [],
    };
  },

  created() {
    this.getAddresses();
  },

  methods: {
    getAddresses() {
      var customer_id = this.$store.getters.userId;
      if (customer_id) {
        this.$http
          .get(`${this.$apiUrl}/customer_addresses/${customer_id}?platform=web`)
          .then((response) => {
            this.customerAddresses = response.data;
            console.log(this.customerAddresses);
          });
      }
    },
  },
};
</script>

<style>
</style>
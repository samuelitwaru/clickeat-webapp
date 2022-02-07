<template>
  <v-item-group>
    <v-container>
      <div class="d-flex justify-space-around mb-2">
        <create-address-dialog />
      </div>
      <v-row justify="center">
        <v-col v-for="address in addresses" :key="address.name" cols="12">
          <v-item>
            <Address
              :name="address.name"
              :county="address.county"
              :subcounty="address.subcounty"
              :village="address.village"
              :description="address.description"
            />
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import Address from "./Address.vue";
import CreateAddressDialog from "./CreateAddressDialog.vue";
export default {
  components: { Address, CreateAddressDialog },
  data() {
    return {
      addresses: [
        {
          name: "Ayivu (Arua City)",
          county: "Ayivu (Arua City)",
          subcounty: "Oluko",
          village: "Muni",
          description: "At the university compass",
        },
      ],
    };
  },
};
</script>

<style>
</style>
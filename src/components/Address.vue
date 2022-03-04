<template>
  <v-col cols="12" md="4">
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title> {{ village }} </v-list-item-title>
          <div class="text--primary">{{ subcounty }}</div>
          <div class="text--primary">{{ county }}</div>
          <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
        </v-list-item-content>
        <span v-if="isDefault"
          >DEFAULT <v-icon>mdi-check</v-icon></span
        >
      </v-list-item>

      <v-card-actions>
        <v-btn outlined color="error" text @click='deleteAddress(id)'> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['id', "name", "description", "county", "subcounty", "village", 'isDefault'],
  methods: {
    deleteAddress(addressId) {
      this.$confirm(`Delete address ${this.village}?`, {})
      .then(res => {
        if(res){
          this.$http.delete(`${this.$apiUrl}/customer_addresses/${addressId}?platform=web`)
          .then((response) => {
            console.log(response.data);
            this.$parent.getAddresses()
          });
        }
      })
    }
  },
};
</script>

<style>
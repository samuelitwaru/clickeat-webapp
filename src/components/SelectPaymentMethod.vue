<template>
  <div>
    <v-select
      v-model="selectedMethod"
      :items="methods"
      item-text="name"
      item-value="name"
      label="Select Payment Method"
      persistent-hint
      return-object
      single-line
     
    ></v-select>

    <v-card class="my-2" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title> {{ selectedMethod.name }} </v-list-item-title>
          <v-list-item-subtitle>{{
            selectedMethod.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    methods: {
      type: Array,
    },
    selectedMethod: {
      type: Object,
    },
  },
  data() {
    return {
      
    };
  },
  created() {
    this.$store.state.paymentMethod = this.selectedMethod;
  },
};
</script>

<style>
</style>
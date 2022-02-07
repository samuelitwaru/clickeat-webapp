<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title> {{ name }} </v-list-item-title>
        <div class="text--primary">{{ village }}</div>
        <div class="text--primary">{{ subcounty }}</div>
        <div class="text--primary">{{ county }}</div>
        <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
      </v-list-item-content>
      (default)
    </v-list-item>

    <v-card-actions>
      <v-btn outlined color="error" text> Delete </v-btn>
      <!-- <v-btn outlined text> Edit </v-btn> -->
      <v-btn outlined error text> Set Default </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["name", "description", "county", "subcounty", "village"],
};
</script>

<style>
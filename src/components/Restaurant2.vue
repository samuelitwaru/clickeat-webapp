<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">{{status}}</div>
        <v-list-item-title> {{name}} </v-list-item-title>
        <v-list-item-subtitle
          >Open from {{openFrom}} to {{openTo}}</v-list-item-subtitle
        >
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text> Visit </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ['name', 'openFrom', 'openTo', 'status']
};
</script>

<style>
</style>
<template>
  <v-card class="my-2" outlined>
    <v-list-item>
      <v-list-item-content class="pa-0">
        <div class="text-overline"> {{status}} <span>{{date}}</span> </div>
        <v-row>
            <v-col>
                <v-list-item-avatar class='mt-0 mb-2' tile size="60" color="grey"></v-list-item-avatar>
            </v-col>
            <v-col>
                <v-list-item-title class="mb-"> {{productName}} </v-list-item-title>
                <v-list-item-subtitle>{{orderRef}}</v-list-item-subtitle>
            </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
    props: ['productName', 'status', 'date', 'orderRef']
};
</script>

<style>
</style>
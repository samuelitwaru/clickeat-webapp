<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{status}}
        </div>
        <v-list-item-title> {{name}} </v-list-item-title>
        <v-list-item-subtitle
          >Open from {{openFrom}} to {{openTo}}</v-list-item-subtitle
        >
      </v-list-item-content>
      <v-img 
            class="rounded-circle"
            :src="$staticUrl + '/business_profile_picture/' + image" 
            max-width="80px">
        </v-img>
    </v-list-item>

    <v-card-actions>
      <router-link :to='`/restaurants/${id}`'><v-btn outlined rounded text> Visit </v-btn></router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['id', 'name', 'openFrom', 'openTo', 'isOpen', 'image'],
  computed: {
    status() {
      if (this.isOpen){
        return "open"
      }
      return "closed"
    }
  },
};
</script>

<style>
</style>
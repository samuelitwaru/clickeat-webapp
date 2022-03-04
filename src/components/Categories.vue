<template>
<div>
  <h3 align='center' class="pa-3">Top Categories</h3>
  <v-sheet class="d-flex justify-space-around">
    <v-slide-group show-arrows class="pa-2">
      <v-slide-item v-for="category in categories" :key="category.id" class="mx-2 border rounded" >
        <router-link to="/">
          <div align='center' class="pa-2">
            <p>{{category.name}}</p>
            <v-img 
                class="rounded-circle border"
                :src="$staticUrl+'/product_images/'+category.subCatImage" 
                width="60px"
                height="60px">
            </v-img>
          </div>
        </router-link>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: []
    }
  },
  created () {
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.$http.get(`${this.$apiUrl}/fetch_all_subcats?platform=web`)
      .then((response) => {
        this.categories = response.data
      });
    },
  },
}
</script>

<style>
  .border{
    border: 1px solid #dddddd;
  }
</style>
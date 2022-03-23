<template>
  <div>
    <h3 align="center" class="pa-2">Categories</h3>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col
            v-for="category in categories"
            :key="category.id"
            cols="12"
            md="4"
          >
            <v-item>
              <router-link :to="`/categories/${category.id}`">
                <v-card class="mx-auto" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title> {{ category.name }} </v-list-item-title>
                    </v-list-item-content>
                    <v-img
                      class="rounded-circle"
                      :src="$staticUrl + '/product_images/' + category.subCatImage"
                      max-width="80px"
                    >
                    </v-img>
                  </v-list-item>
                </v-card>
              </router-link>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.$http
        .get(`${this.$apiUrl}/fetch_all_subcats?platform=web`)
        .then((response) => {
          this.categories = response.data;
          this.$store.state.categories = this.categories;
          console.log(this.categories);
        });
    },
  },
};
</script>

<style>
</style>
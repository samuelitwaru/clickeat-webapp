<template>
  <div>
    <div class="pa-2">
      <v-card
        class="mx-auto"
        max-width="400"
        outlined>
        <v-list-item three-line>
          <v-img
              src="@/assets/burger.jpg" 
              width="80"
              >
          </v-img>
          <v-list-item-content>
            <div class="text-overline mb-4">
            </div>
            <v-list-item-title class="text-h5 mb-1">
              Product Name
            </v-list-item-title>
            <p>Discount</p>
            <p>Price</p>
            <v-list-item-subtitle>This is the product description</v-list-item-subtitle>
            <v-btn rounded color="primary" dark>Add</v-btn>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions align="right">
          <v-rating
            background-color="primary lighten-3"
            color="primary"
            large
          ></v-rating>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        product: {},
      }
    },

    created () {
      this.getProduct();
    },

    methods: {
      getProduct() {
        console.log(this.$route)
        this.$http.get(`${this.$apiUrl}/products/1?platform=web`)
        .then((response) => {
          console.log('>>>>>>>>>>>'+response.data);
        });
      },
    },
  }
</script>

<style>

</style>
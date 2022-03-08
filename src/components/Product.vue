<template>
  <div align="center" class="product ma-1 pa-2 border">
    <router-link :to="/products/ + product.product_id">
      <v-img
        width="100px"
        height="100px"
        class="border"
        color="grey"
        :src="$staticUrl + '/product_images/' + image"
      >
      </v-img>
    </router-link>
    <div>
      <p style="min-height: 4.5rem; max-height: 4.5rem" class="ma-auto">
        {{ name }}
      </p>
      <p style="min-height: 25px" class="ma-auto">{{ discount }}</p>
      <p style="min-height: 25px" class="ma-auto">{{ price }}</p>
      <v-btn rounded color="primary" @click="addToCart" dark>Add</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "discount", "price", "image", "product"],
  data() {
    return {};
  },

  created() {},

  methods: {
    addToCart() {
      var customer_id = this.$store.state.user.customer_id;

      if (customer_id) {
        var data = {
          product_id: this.product.product_id,
          customer_id: customer_id,
          product_name: this.name,
          product_image: this.image,
          unit_price: this.price,
          quantity: 1,
          free_delivery: false,
          restaurant: this.product.resturant,
        };

        this.$store.state.overlay = true;
        this.$http
          .post(`${this.$apiUrl}/addToCart?platform=web`, data)
          .then((response) => {
            console.log(response);
            this.$store.state.overlay = false;
          });
      }
    },
  },
};
</script>

<style>
.product {
  max-width: 120px;
}
</style>
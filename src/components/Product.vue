<template>
  <v-card align="center" class="product ma-1 pa-2">
    <router-link :to="/products/ + product.product_id">
      <v-img
        width="100px"
        height="100px"
        class="border"
        color="primary"
        :src="$staticUrl + '/product_images/' + image"
      >
      </v-img>
    <!-- <div> -->
      <p style="min-height: 4.5rem; max-height: 4.5rem" class="ma-auto">
        {{ name }}
      </p>
    </router-link>
      <p style="min-height: 3rem" class="ma-auto"><span v-if="discount"><strike>{{product.price|currency}}</strike> {{ discount }}% OFF</span></p>
      <p style="min-height: 25px" class="ma-auto">{{ computedPrice|currency }}</p>
      <v-btn rounded color="primary" @click="addToCart" dark>Add</v-btn>
    <!-- </div> -->
  </v-card>
</template>

<script>
export default {
  props: ["name", "price", "image", "product", "promotional_price"],
  data() {
    return {};
  },

  created() {},

  computed: {
    discount() {
      if (this.promotional_price) {
          return Math.round((this.price-this.promotional_price)/this.price*100) 
      }
      return null
    },
    computedPrice(){
      return this.promotional_price || this.price
    }
  },

  methods: {
    addToCart() {
      var customer_id = this.$store.getters.userId;

      if (customer_id) {
        var data = {
          product_id: this.product.product_id,
          customer_id: customer_id,
          product_name: this.name,
          product_image: this.image,
          unit_price: this.promotional_price || this.price,
          quantity: 1,
          free_delivery: false,
          restaurant: this.product.resturant,
        };

        this.$store.state.overlay = true;
        this.$http
          .post(`${this.$apiUrl}/addToCart?platform=web`, data)
          .then((response) => {
            alert(response.data.message);
            this.$store.state.overlay = false;
          });
      }else{
        this.$store.state.showSigninModal = true;
        // this.$store.commit('setShowSigninModal', false)
        console.log( this.$store.state.showSigninModal);
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
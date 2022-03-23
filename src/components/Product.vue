<template>
  <router-link :to="/products/ + product.product_id">
    <v-card
      max-width="250"
      min-width="250"
      min-height="150"
      outlined
      v-if="product"
      class="ma-2 pa-1"
      elevation='2'
    >
      <v-card-actions>
        <v-list-item-title class="text-h6 mb-1">
          {{ name }}
        </v-list-item-title>
      </v-card-actions>
      <v-list-item three-line class="ma-0 pa-0">
        <v-img
          class="border rounded-circle"
          :src="$staticUrl + '/product_images/' + image"
          width="2rem"
          height="10rem"
        >
        </v-img>
        <v-list-item-content class="ma-0 pa-0" align='center'>
          <p v-if="discount">
            <strike>{{ product.price | currency }} </strike>{{ discount }}% OFF
          </p>
          <p>{{ computedPrice | currency }}</p>
          <!-- <v-list-item-subtitle>{{
              product.description
            }}</v-list-item-subtitle> -->
          <v-btn rounded color="primary" dark @click="addToCart()"><v-icon>mdi-cart</v-icon> Add</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </router-link>
  <!-- <v-card align="center" class="product ma-1 pa-2">
    <router-link :to="/products/ + product.product_id">
      <v-img
        width="100px"
        height="100px"
        class="border"
        color="primary"
        :src="$staticUrl + '/product_images/' + image"
      >
      </v-img>
      <p style="min-height: 4.5rem; max-height: 4.5rem" class="ma-auto">
        {{ name }}
      </p>
    </router-link>
      <p style="min-height: 3rem" class="ma-auto"><span v-if="discount"><strike>{{product.price|currency}}</strike> {{ discount }}% OFF</span></p>
      <p style="min-height: 25px" class="ma-auto">{{ computedPrice|currency }}</p>
      <v-btn rounded color="primary" @click="addToCart" dark>Add</v-btn>
  </v-card> -->
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
        return Math.round(
          ((this.price - this.promotional_price) / this.price) * 100
        );
      }
      return null;
    },
    computedPrice() {
      return this.promotional_price || this.price;
    },
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
      } else {
        this.$store.state.showSigninModal = true;
        // this.$store.commit('setShowSigninModal', false)
        console.log(this.$store.state.showSigninModal);
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
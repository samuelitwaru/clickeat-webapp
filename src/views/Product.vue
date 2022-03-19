<template>
  <div>
    <div class="pa-2">
      <v-card class="mx-auto" max-width="500" outlined v-if="product">
        <v-list-item-title class="text-h5 pa-2">
              {{ product.name }}
            </v-list-item-title>
        <v-list-item three-line>
          <v-img
            :src="`${$staticUrl}/product_images/${product.product_picture}`"
            width="80"
            class="rounded-circle"
          >
          </v-img>
          <v-list-item-content align='center' class="ma-0 pa-2">
            <!-- <div class="text-overline mb-4"></div> -->
            <p v-if="discount">
              <strike>{{ product.price | currency }} </strike>{{ discount }}%
              OFF
            </p>
            <p>{{ price | currency }}</p>
            <v-list-item-subtitle>{{
              product.description
            }}</v-list-item-subtitle>
            <v-btn rounded color="primary" dark @click="addToCart()">Add</v-btn>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          Rate Product
          <v-rating
            background-color="primary lighten-3"
            color="primary"
            large
            v-model="rating"
            @input="rateProduct()"
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
      product: null,
      rating: 0,
    };
  },

  computed: {
    discount() {
      if (this.product.promotional_price) {
        return Math.round(
          ((this.product.price - this.product.promotional_price) /
            this.product.price) *
            100
        );
      }
      return null;
    },

    price() {
      return this.product.promotional_price || this.product.price;
    },
  },

  created() {
    this.getProduct();
  },

  methods: {
    getProduct() {
      this.$http
        .get(
          `${this.$apiUrl}/get_product/${this.$route.params.id}?platform=web`
        )
        .then((response) => {
          this.product = response.data;
        });
    },

    rateProduct() {
      var customer_id = this.$store.getters.userId;
      if (customer_id) {
        var data = {
          rate: this.rating,
          customerID: customer_id,
        };
        this.$store.state.overlay = true;
        this.$http
          .post(
            `${this.$apiUrl}/rate_product/${this.product.product_id}?platform=web`,
            data
          )
          .then((response) => {
            console.log(response.data);
            this.$store.state.overlay = false;
          });
      } else {
        this.rating = 0
        this.$store.state.showSigninModal = true;
      }
    },

    addToCart() {
      var customer_id = this.$store.getters.userId;
      console.log(this.product);
      if (customer_id) {
        var data = {
          product_id: this.product.product_id,
          customer_id: customer_id,
          product_name: this.product.name,
          product_image: this.product.product_picture,
          unit_price: this.price,
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
      }
    },
  },
};
</script>

<style>
</style>
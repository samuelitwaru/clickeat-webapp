<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"
        >Delivery Address</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Payment</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Summary</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <h3>Delivery Address</h3>
        <div>
          <v-select
            v-model="selectedAddress"
            :items="customerAddresses"
            item-text="village"
            item-value="id"
            label="Select Address"
            persistent-hint
            return-object
            single-line
            @change="$store.state.deliveryAddress=selectedAddress"
          ></v-select>

          <v-card class="my-2" max-width="344" outlined v-if="selectedAddress">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>
                  {{ selectedAddress.village }}
                </v-list-item-title>
                <div class="text--primary">
                  {{ selectedAddress.sub_county }}
                </div>
                <div class="text--primary">{{ selectedAddress.county }}</div>
                <v-list-item-subtitle>{{
                  selectedAddress.other_details
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
        <div class="d-flex justify-end">
          <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-content step="2">
        <h3>Payment Method</h3>
        <div>
          <v-select
            v-model="selectedMethod"
            :items="methods"
            item-text="name"
            item-value="name"
            label="Select Payment Method"
            persistent-hint
            return-object
            single-line
          ></v-select>

          <v-card class="my-2" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>
                  {{ selectedMethod.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  selectedMethod.description
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
        <div class="d-flex justify-end justify-space-between">
          <v-btn color="primary" outlined @click="e1 = 1"> Back </v-btn>
          <div>
            <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
          </div>
        </div>
      </v-stepper-content>

      <v-stepper-content step="3">
        <checkout-summary
          :products="products"
          :paymentMethod="paymentMethod"
          :deliveryAddress="address"
          :total="total"
          :deliveryFee="deliveryFee"
        />
        <v-row>
          <v-col cols="6">
            <h3>Pre-order</h3>
            <v-card
              class="my-2 px-2"
              max-width="344"
              outlined
              v-if="paymentMethod"
            >
              <v-checkbox
                v-model="preOrder"
                label="Check this to make the order later"
              ></v-checkbox>
            </v-card>
          </v-col>
          <v-col cols="6">
            <h3>Delivey Contact</h3>
            <v-card
              class="my-2 px-2"
              max-width="344"
              outlined
              v-if="deliveryContact"
            >
              <v-text-field
                v-model="deliveryContact"
                label="Delivery Contact"
                required
              ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
        <div class="d-flex justify-end justify-space-between">
          <v-btn color="primary" outlined @click="e1 = 2"> Back </v-btn>
          <div>
            <v-btn color="primary" @click="checkout()"> CONFIRM </v-btn>
          </div>
        </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CheckoutSummary from "../components/CheckoutSummary.vue";
// import SelectDeliveryAddress from "../components/SelectDeliveryAddress.vue";
// import SelectPaymentMethod from "../components/SelectPaymentMethod.vue";
export default {
  components: { CheckoutSummary },
  data() {
    return {
      e1: 1,
      addresses: [],
      customerAddresses: [],
      selectedAddress: {},
      deliveryFee: 0,
      methods: [
        {
          name: "Cash on delivery",
          description:
            "You will be expected to pay for the product when it is delivered to you.",
        },
      ],
      selectedMethod: {},
      preOrder: false,
      customer: this.$store.state.user,
      deliveryContact: this.$store.state.user.contact,
    };
  },

  created() {
    this.getAddresses();
    this.getCustomerAddresses();
    this.selectedMethod = this.methods[0];
    this.$store.state.paymentMethod = this.selectedMethod;
  },

  computed: {
    address() {
      return this.$store.state.deliveryAddress;
    },
    products() {
      return this.$store.state.cartProducts;
    },
    paymentMethod() {
      return this.$store.state.paymentMethod;
    },
    total() {
      var total = 0;
      for (const index in this.products) {
        var item = this.products[index];
        total = total + item.unit_price * item.quantity;
      }
      return total;
    },

    totalCartQuantity() {
      var total = 0;
      for (var i = 0; i < this.products.length; i++) {
        var cartProduct = this.products[i];
        total += cartProduct.quantity;
      }
      return total;
    },
  },

  methods: {
    getAddresses() {
      this.$http
        .get(`${this.$apiUrl}/arua_places?platform=web`)
        .then((response) => {
          this.addresses = response.data;
        });
    },
    getCustomerAddresses() {
      var customer_id = this.$store.getters.userId;
      if (customer_id) {
        this.$http
          .get(`${this.$apiUrl}/customer_addresses/${customer_id}?platform=web`)
          .then((response) => {
            this.customerAddresses = response.data;
            this.setDefaultAddress();
            this.$store.state.deliveryAddress = this.selectedAddress;
            this.calcDeliveryFee();
          });
      }
    },
    setDefaultAddress() {
      var filtered = this.customerAddresses.filter(
        (address) => address.is_default
      );
      console.log(this.customerAddresses.length);
      console.log(filtered.length);
      if (filtered.length) {
        this.selectedAddress = filtered[0];
        return;
      }else if (this.customerAddresses.length) {
        this.selectedAddress = this.customerAddresses[0]
        return
      }
      this.selectedAddress = {};
      console.log(this.selectedAddress);
    },
    calcDeliveryFee() {
      var filtered = [];
      if (this.address) {
        filtered = this.addresses.filter((place) => {
          return place.village == this.address.village;
        });
      }
      var fee = 0;
      if (filtered.length) {
        fee = filtered[0].fee;
      }
      var remainderQuantity = this.totalCartQuantity - 3;
      if (remainderQuantity > 0) {
        fee += Math.ceil(remainderQuantity / 3) * fee;
      }
      this.deliveryFee = fee;
      return fee;
    },
    checkout() {
      this.$confirm(`Checkout?`, {}).then((res) => {
        if (res) {
          var data = {
            payment_method: this.$store.state.paymentMethod.name,
            customer_id: this.$store.getters.userId,
            deliveryContact: this.deliveryContact,
            deliveryFee: this.deliveryFee,
            address: this.address,
            pre_order: this.preOrder,
            pre_order_date: "",
          };
          this.$store.state.overlay = true;
          this.$http
            .post(`${this.$apiUrl}/customer_order?platform=web`, data)
            .then((response) => {
              alert(response.data.message);
              this.$store.state.overlay = false;
              this.$router.push({ path: "/" });
            });
        }
      });
    },
  },
};
</script>

<style>
</style>
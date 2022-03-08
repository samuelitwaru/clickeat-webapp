<template>
  <div>
    <h3>Delivering to:</h3>
    <v-card class="my-2" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title> {{ deliveryAddress.village }} </v-list-item-title>
          <div class="text--primary">{{ deliveryAddress.sub_county }}</div>
          <div class="text--primary">{{ deliveryAddress.county }}</div>
          <v-list-item-subtitle>{{
            deliveryAddress.other_details
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <h3>Mode of Payment:</h3>
    <v-card class="my-2" max-width="344" outlined v-if="paymentMethod">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title> {{ paymentMethod.name }} </v-list-item-title>
          <v-list-item-subtitle>{{
            paymentMethod.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <h3>Items:</h3>
    <v-simple-table class="my-2">
      <template>
        <tbody>
          <tr v-for="item in products" :key="item.name">
            <td align="center">
               <v-img
                :src="$staticUrl+'/product_images/'+item.product_image"
                class="rounded-circle border"
                width="50"
                height="50"
              />
            </td>
            <td>
              {{ item.product_name }}<br />
              {{ item.unit_price }}<br />
              x{{ item.quantity }}
            </td>
            <td align="center">
              {{ item.unit_price * item.quantity }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td align="center"><strong>Item Fees</strong></td>
            <td colspan="2"  align="center">
              <strong>{{ total }}</strong>
            </td>
          </tr>

          <tr>
            <td align="center"><strong>Delivery Fee</strong></td>
            <td colspan="2" align="center">
              <strong>{{ deliveryFee }}</strong>
            </td>
          </tr>

          <tr>
            <td align="center"><strong>TOTAL</strong></td>
            <td colspan="2" align="center">
              <strong>{{ deliveryFee + total }}</strong>
            </td>
          </tr>
        </tfoot>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
    },
    paymentMethod: {
      type: Object,
    },
    deliveryAddress: {
      type: Object,
    },
    total: {
      type: Number,
    },
    deliveryFee: {
      type: Number,
    },
  },
  data() {
    return {
    };
  },
  created () {
      console.log(this.paymentMethod)
  },
};
</script>

<style>
tbody > tr:hover {
  background: transparent !important;
}
</style>
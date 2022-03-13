<template>
  <v-dialog
    v-if="order"
    :value="show"
    persistent
    @click:outside="$parent.show = false"
    scrollable
  >
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        {{ order.order_ref_simple_version }}
      </v-card-title>

      <v-card-text class="pa-0">
        <v-simple-table class="my-2">
          <template>
            <tbody>
              <tr>
                <td>Date</td>
                <td>{{ order.order_date }}</td>
              </tr>
              <tr>
                <td>Paid</td>
                <td>{{ status(order.is_paid) }}</td>
              </tr>
              <tr>
                <td>Prepaired</td>
                <td>{{ status(order.is_prepared) }}</td>
              </tr>
              <tr>
                <td>Treminated</td>
                <td>{{ status(order.is_terminated) }}</td>
              </tr>
              <tr>
                <td>Received</td>
                <td>{{ status(order.customer_received) }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-simple-table class="my-2">
          <template>
            <tbody>
              <tr v-for="item in order.order_items" :key="item.name">
                <td align="center">
                  <v-img
                    :src="$staticUrl + '/product_images/' + item.product_image"
                    class="rounded-circle border"
                    width="30"
                    height="30"
                  />
                </td>
                <td>
                  {{ item.product_name }}<br />
                  {{ item.unit_price | commas }}<br />
                  x{{ item.quantity }}
                </td>
                <td align="center">
                  {{ (item.unit_price * item.quantity) | commas }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td align="center"><strong>TOTAL</strong></td>
                <td colspan="3" align="center">
                  <strong>{{ total | currency }}</strong>
                </td>
              </tr>
            </tfoot>
          </template>
        </v-simple-table>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="$parent.show = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["show", "order"],
  computed: {
    total() {
      var total = 0;
      for (const index in this.order.order_items) {
        var item = this.order.order_items[index];
        console.log(item);
        total = total + item.unit_price * item.quantity;
      }
      return total;
    },
  },
  methods: {
      status(status) {
          if(status) {return 'Yes'}
          return 'No'
      },
  },
};
</script>

<style>
</style>
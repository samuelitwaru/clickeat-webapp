<template>
  <div>
    <h3 align="center" class="pa-2">Orders</h3>
    <order-modal :show="show" :order='order'/>
    <v-container grid-list-xs>
      <v-simple-table>
        <template>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>
                {{ order.order_date }}
              </td>
              <td>
                {{ order.order_ref_simple_version }} <br>
              </td>
              <td align="center">
                  <v-btn outlined color="primary" dark @click='openOrder(order)'>
                    VIEW
                  </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
    <p v-if="!orders.length" align="center">No Orders</p>
  </div>
</template>

<script>
import OrderModal from '../components/OrderModal.vue';
// import Order from "../components/Order.vue";

export default {
  components: {OrderModal  },
  data() {
    return {
      orders:[],
      order:null,
      show:true,

    };
  },
  created() {
    this.getOrders();
  },

  methods: {
    getOrders() {
      var customer_id = this.$store.getters.userId;
      console.log(customer_id);
      this.$http
        .get(`${this.$apiUrl}/customer_orders/${customer_id}?platform=web`)
        .then((response) => {
          this.orders = response.data
          console.log(response.data);
        });
    },

    openOrder(order){
      this.order = order
      this.show = true
    }
  },
};
</script>

<style>
</style>
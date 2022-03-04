<template>
  <div>
    <h3 align="center" class="pa-2">Orders</h3>
    <v-container grid-list-xs>
      <order
        v-for="order in orders"
        :key="order.orderRef"
        :productName="order.productName"
        :status="order.status"
        :orderRef="order.orderRef"
        :date="order.date"
      />
    </v-container>
    <p v-if='!orders.length' align='center'>No Orders</p>
  </div>
</template>

<script>
import Order from "../components/Order.vue";

export default {
  components: { Order },
  data() {
    return {
      orders: [
        {
          productName: "Meat Burger",
          status: "Delivered",
          orderRef: "Order 1234",
          date: "25-12-2020",
        },
        {
          productName: "Meat Burger",
          status: "Delivered",
          orderRef: "Order 12345",
          date: "25-12-2020",
        },
        {
          productName: "Meat Burger",
          status: "Delivered",
          orderRef: "Order 123456",
          date: "25-12-2020",
        },
      ],
    };
  },
  created () {
    this.getOrders();
  },

  methods: {
    getOrders(){
      var customer_id = this.$store.state.user.customer_id
      console.log(customer_id);
      this.$http.get(`${this.$apiUrl}/customer_orders/${customer_id}?platform=web`)
      .then((response) => {
        this.orders = response.data
        console.log(this.orders);
      });
    }
  },
};
</script>

<style>
</style>
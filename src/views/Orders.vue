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
};
</script>

<style>
</style>
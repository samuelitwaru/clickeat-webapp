<template>
  <div>
    <h3 class="pa-3" align="center">Cart</h3>

    <v-simple-table>
      <template>
        <tbody>
          <tr v-for="item in products" :key="item.name">
            <td align="center">
              <v-img
                src="@/assets/burger.jpg"
                class="rounded-circle"
                width="50"
              />
            </td>
            <td>
              {{ item.name }}
              <div class="d-flex my-2 align-center">
                <button class='btn'>-</button>
                <div outlined class='qty'>{{item.quantity}}</div>
                <button class="btn">+</button>
              </div>
              {{ item.unitPrice * item.quantity }}
            </td>
            <td align="center">
              <v-btn outlined color="red" dark>
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td align="center"><strong>Total</strong></td>
            <td colspan="2" align='center'><strong>{{ total }}</strong></td>
          </tr>
        </tfoot>
      </template>
    </v-simple-table>
    
    <div align="center" class="mt-4">
      <router-link to="/checkout">
        <v-btn color="primary">Proceed to checkout</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Frozen Yogurt",
          quantity: 2,
          unitPrice: 2500,
        },
        {
          name: "Donut",
          quantity: 100,
          unitPrice: 1000,
        },
      ],
    };
  },
  computed: {
    total() {
      var total = 0;
      for (const index in this.products) {
        var item = this.products[index];
        total = total + item.unitPrice * item.quantity;
      }
      return total;
    },
  },
};
</script>

<style scoped>
tbody > tr:hover {
  background: transparent !important;
}

.btn {
  border: 1px solid #ff4800;
  background-color: white;
  color: black;
  width: 30px;
  height: 30px;
  padding: 2px 2px;
  font-size: 16px;
  cursor: pointer;
}

.btn:hover {
  background-color: #ff4800;
}

.btn:focus {
  outline: none;
}

.qty {
  border-top: 1px solid #ff4800;
  border-bottom: 1px solid #ff4800;
  background-color: white;
  color: black;
  text-align: center;
  width: 40px;
  height: 30px;
  padding: 2px 2px;
  font-size: 16px;
  cursor: pointer;
}
</style>
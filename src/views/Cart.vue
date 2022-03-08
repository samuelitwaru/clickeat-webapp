<template>
  <div>
    <h3 class="pa-3" align="center">Cart</h3>

    <v-simple-table>
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
              {{ item.product_name }}
              <div class="d-flex my-2 align-center">
                <button class='btn' @click='adjustCartQuantity(item, -1)' :disabled='item.quantity==1'>-</button>
                <div outlined class='qty'>{{item.quantity}}</div>
                <button class="btn" @click='adjustCartQuantity(item, 1)'>+</button>
              </div>
              {{ item.unit_price * item.quantity }}
            </td>
            <td align="center">
              <v-btn outlined color="red" dark @click='removeFromCart(item)'>
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
      
    };
  },
  computed: {
    total() {
      var total = 0;
      for (const index in this.products) {
        var item = this.products[index];
        total = total + item.unit_price * item.quantity;
      }
      return total;
    },
    products() {
      return this.$store.state.cartProducts
    }
  },
  created () {
  },
  methods: {
    removeFromCart(product){
      this.$confirm(`Remove ${product.product_name} from cart?`, {})
      .then(res => {
        if(res){
          this.$store.state.overlay = true
          this.$http.delete(`${this.$apiUrl}/cart_operations/${product.product_id}?platform=web`)
          .then((response) => {
            this.$store.dispatch("setCartProducts", response.data.cart_items);
            this.$store.state.overlay = false
          });
        }
      })
    },
    adjustCartQuantity(product, quantity) {
      var customer_id = this.$store.state.user.customer_id
      var newQuantity = product.quantity + quantity
      if (newQuantity > 0){
        var data = {
          "product_id": product.product_id,
          "quantity": newQuantity,
        }
        console.log(product)
        this.$store.state.overlay = true
        this.$http.put(`${this.$apiUrl}/cart_operations/${customer_id}?platform=web`, data)
        .then((response) => {
          this.$store.dispatch("setCartProducts", response.data.cart_items);
          this.$store.state.overlay = false
        });
      }
    }
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
.btn:disabled{
  background: rgb(250, 250, 250);
  color: #dddddd;
  border: 1px solid #ff4800;
  cursor: default;
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
<template>
  <v-container>
    <h3 align="center">A Few Clicks To Complete An Order</h3>
    <v-divider class="my-2"></v-divider>
    <v-simple-table>
      <template>
        <tbody>
          <tr>
            <td align="center">
              <v-img
                src="@/assets/visit-website.png"
                class="rounded-circle"
                width="50"
                height="50"
              />
            </td>
            <td>
              <p class="text-h6 my-auto">
                Visit clickeat via app or web portal to view items from different suppliers within your area.
              </p>
            </td>
          </tr>

          <tr>
            <td align="center">
              <v-img
                src="@/assets/add-to-cart.png"
                class="rounded-circle"
                width="50"
                height="50"
              />
            </td>
            <td>
              <p class="text-h6 my-auto">
                Make a choice of the items you need by adding them to cart.
              </p>
            </td>
          </tr>

          <tr>
            <td align="center">
              <v-img
                src="@/assets/delivery.png"
                class="rounded-circle"
                width="50"
                height="50"
              />
            </td>
            <td>
              <p class="text-h6 my-auto">
                Go to Cart and proceed to tell us where you need your order delivered.
              </p>
            </td>
          </tr>

          <tr>
            <td align="center">
              <v-img
                src="@/assets/payment-method-2.png"
                class="rounded-circle"
                width="50"
                height="50"
              />
            </td>
            <td>
              <p class="text-h6 my-auto">
                Choose a payment method, relax and wait for the order at your doorstep in minutes.
              </p>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider class="my-2"></v-divider>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
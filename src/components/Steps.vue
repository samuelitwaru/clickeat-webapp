<template>
  <v-container>
    <h3 align="center">How to make an order</h3>
    <v-divider class="my-2"></v-divider>
    <v-timeline>
      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar>
            <img src="@/assets/visit-website.png">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>
            STEP 1
          </span>
        </template>
          <v-card class="elevation-2">
              <v-card-title class="text-h5" style="color:#FF5722;">
                <p>Visit Site</p>
              </v-card-title>
              <v-card-text>
                  Visit clickeat via app or web portal to view items from different suppliers within your area.
              </v-card-text>
          </v-card>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar>
            <img src="@/assets/add-to-cart.png">
          </v-avatar>
        </template>
        <template v-slot:opposite>
        <span>
          STEP 2
        </span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5" style="color:#FF5722;">
          Select
        </v-card-title>
        <v-card-text>
          Make a choice of the items you need by adding them to cart.
        </v-card-text>
      </v-card>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar>
            <img src="@/assets/delivery.png">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>
            STEP 3
          </span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5" style="color:#FF5722;">
            Process
          </v-card-title>
          <v-card-text>
              Go to Cart and proceed to tell us where you need your order delivered.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar>
            <img src="@/assets/payment-method-2.png">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>
            STEP 4
          </span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5" style="color:#FF5722;">
            Select payment
          </v-card-title>
          <v-card-text>
            Choose a payment method, relax and wait for the order at your doorstep in minutes.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>


    <!-- <v-simple-table>
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
    <v-divider class="my-2"></v-divider> -->
  </v-container>
</template>

<script>
export default {};
</script>

<style>
/* .v-card__text, .v-card__title {
  word-break: break-word; 
  word-wrap: normal;
} */
</style>
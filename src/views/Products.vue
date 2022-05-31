<template>
  <div>
    <!-- <v-row align="center" class="mx-auto">
        <v-col cols="4">
          <v-select
            v-model="e1"
            :items="states"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-food"
            single-line
          ></v-select>
        </v-col>

        <v-col cols="4">
          <v-text-field
            label="Price"
            prepend-icon="mdi-cash"
            v-model="price"
          ></v-text-field>
        </v-col>

        <v-col cols="4">
          <v-select
            v-model="e1"
            :items="states"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-pizza"
            single-line
          ></v-select>
        </v-col>
    </v-row> -->
    <!-- <input type="text" v-model="price" placeholder="price"/> -->
    <products :products="products" />
  </div>
</template>

<script>
import Products from "../components/Products.vue";
export default {
  components: { Products },
  data() {
    return {
      products: [],
      price: ""
    };
  },
  created () {
      this.getProducts();
  },
  methods: {
    getProducts() {
      this.$store.state.overlay = true; 
      if(this.$store.state.all_products.length === 0){
        this.$http
        .get(`${this.$apiUrl}/home_products?platform=web`)
        .then((response) => {
          this.$store.state.all_products = response.data.all_products;
          this.products = response.data.all_products;
          this.$store.state.overlay = false;
        });
        
      }else {
        this.products = this.$store.state.all_products;
        this.$store.state.overlay = false;
      }
      
    },
  },
  computed: {
    filteredPdts: function(){
      console.log(">>>>>>>>", this.price);
      return "tea"
    }
  }
};
</script>

<style>

</style>
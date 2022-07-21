<template>
  <div>
    <v-row align="center" class="mx-auto">
        <v-col cols="6">
          <v-select
          @change="onChange($event)"
          style="padding-top:12px;"
          v-model="restaurant"
          :items="restaurants"
          label="Select Restaurant"
          prepend-icon="mdi-food"
          dense
          solo
          ></v-select>
        </v-col>

        <v-col cols="6">
          <v-text-field
            style="padding-top:12px;"
            label="Product name"
            prepend-icon="mdi-pizza"
            v-model="search"
            solo
          ></v-text-field>
        </v-col>
    </v-row>
    <!-- <div class="flex-center">
      <v-radio-group
      v-model="row"
      row
      class="justify-center"
    >
      <v-radio
        label="Breakfast"
        value="Breakfast"
      ></v-radio>
      <v-radio
        label="Lunch"
        value="Lunch"
      ></v-radio>
      <v-radio
        label="Dinner"
        value="Dinner"
      ></v-radio>
    </v-radio-group>
    </div> -->
    <products :products="filteredPdts" />
  </div>
</template>

<script>
import Products from "../components/Products.vue";
export default {
  components: { Products },
  data() {
    return {
      products: [],
      search: "",
      restaurant:"",
      restaurants: [
        "Maisha", 
        "Bamboo Village", 
        "Town Grill & BBQ",
        "Luwombo Restaurant",
        "The White Castle",
        "Roja Creamary",
        "Fruit and Vegetable Shop"
        ]
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

    onChange(event){
      var all = this.products
      console.log(all.length)
      if(this.products.length === 0){
        console.log("array empty");
        this.products = all;
      }
      var pdts = this.products.filter((product) => {
        return product.resturant.match(event);
      })
      console.log(pdts)
      this.products = pdts
      // console.log(event);
    }
  },
  computed: {
    filteredPdts: {
      //getter
      get(){
          return this.products.filter((product) => {
          return product.name.match(this.search);
        });
      },

      // setter
      set(newValue){
        return this.products = newValue
      }
      
    }
  }
};
</script>

<style scoped>
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
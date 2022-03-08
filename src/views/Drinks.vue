<template>
  <div>
    <h3 align="center" class="pa-2">Drinks</h3>
    <div class="d-flex justify-center">
        <v-chip-group active-class="primary--text">
            <v-chip
                v-for="category in categories"
                :key="category.sub_category"
                @click="getDrinksByCategory(category.category_id)"
                class="justify-center"
            >
                {{ category.name }}
            </v-chip>
        </v-chip-group>
    </div>


    <products :products='drinks'/>
  </div>
</template>

<script>
import Products from '../components/Products.vue';
export default {
  components: { Products },
  data() {
    return {
      categories: ['Soft Drinks', 'Liquors', 'Processed Juice', 'Beers', 'Energy Drinks', 'Water'],
      drinks: [
        {name: 'Cock', description: '', price:20000, discount:20, image: require('@/assets/soda.jpeg')},
        {name: 'Wine', description: '', price:20000, discount:20, image: require('@/assets/soda.jpeg')},
        {name: 'Water', description: '', price:20000, discount:20, image: require('@/assets/soda.jpeg')}
      ]
    }
  },

  created () {
    this.getCategories();
  },

  methods: {
    getCategories() {
      this.$http.get(`${this.$apiUrl}/drinks_sub_cat?platform=web`)
      .then((response) => {
        this.categories = response.data.drinksSubCat
        if(this.categories.length){
          this.getDrinksByCategory(this.categories[0].sub_category_id)
        }
      });
    },

    getDrinksByCategory(categoryId) {
      this.$http.get(`${this.$apiUrl}/drinks_based_on_sub_cat/${categoryId}?platform=web`)
      .then((response) => {
        this.drinks = response.data[0].products
        console.log(this.drinks);
      });
    }
  },
};
</script>

<style>
</style>
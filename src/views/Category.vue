<template>
  <div>
      <h3 class="pa-2" align='center'>{{this.category.name}}</h3>
      <products :products="products"/>
  </div>
</template>

<script>
import Products from '../components/Products.vue';
export default {
  components: { Products },
    data() {
        return {
            products: []
        }
    },
    created () {
        this.getCategoryProducts();
    },
    computed: {
        category() {
            var filtered = this.$store.state.categories.filter(category=>category.id==this.$route.params.id) 
            console.log(this.$store.state.categories)
            if (filtered.length) {
                return filtered[0]
            }
            return {}
        }
    },
    methods: {
        getCategoryProducts() {
            var categoryId = this.$route.params.id
            this.$http.get(`${this.$apiUrl}/sub_cat_products/${categoryId}?platform=web`)
            .then((response) => {
                this.products = response.data
            });
        },
    },
}
</script>

<style>

</style>
<template>
    <div align='center' class="product ma-1 pa-2 border">
        <router-link :to='/products/+id'>
            <v-img
                :src="image" 
                >
            </v-img>
        </router-link>
        <div>
            <p>{{name}}</p>
            <p>{{discount}}</p>
            <p>{{price}}</p>
            <v-btn rounded color="primary" dark>Add</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'discount', 'price', 'image'],
    data() {
        return {
            id: 17377,
        }
    },
}
</script>

<style>

.product {
    max-width: 120px;
}

</style>
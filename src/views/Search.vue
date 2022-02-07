<template>
    <div>
        <div class="pa-2">
            <v-text-field autofocus outlined placeholder="Search Your Meal"></v-text-field>
        </div>
        <Products />
    </div>
</template>

<script>
    import Products from '@/components/Products';
    export default {
        components: {
            Products,
        },
    }
</script>

<style scoped>

</style>
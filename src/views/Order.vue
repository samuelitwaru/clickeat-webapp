<template>
  <div v-if="order">

  </div>
</template>

<script>
export default {
    data() {
        return {
            order: null
        }
    },
    methods: {
        getOrder() {
            this.$http.get(`${this.$apiUrl}/orders/${this.route.params.id}?platform=web`)
            .then((response) => {
                this.order = response.data
                console.log(this.order);
            });
        },
    },
}
</script>

<style>

</style>
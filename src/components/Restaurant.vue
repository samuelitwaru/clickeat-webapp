<template>
  <div align='center' width='80' class="border pa-2">
        <v-img 
            class="rounded-circle"
            src="@/assets/burger.jpg" 
            max-width="80px">
        </v-img>
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
    props: ['name'],
}
</script>

<style>

</style>
<template>
   <v-overlay
        :value="overlay"
        class="mx-auto" style="z-index:1000">
          
        <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
           
    </v-overlay>
</template>

<script>
export default {
    props: ['overlay'],
}
</script>

<style>

</style>
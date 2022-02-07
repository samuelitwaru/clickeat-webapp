<template>
<div>
  <h3 align='center' class="pa-3">Categories</h3>
  <v-sheet class="d-flex justify-space-around">
    <v-slide-group show-arrows class="pa-2">
      <v-slide-item v-for="n in 10" :key="n" class="mx-2">
          <div align='center' class="border pa-2">
            <v-img 
                class="rounded-circle"
                src="@/assets/burger.jpg" 
                width="60px">
            </v-img>
            <p>Category Name</p>
          </div>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  </div>
</template>
<script>
export default {

}
</script>

<style>
  .border{
    border: 1px solid #dddddd;
  }
</style>
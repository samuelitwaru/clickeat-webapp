<template>
  <div class="text-center fixed-bottom d-sm-none" v-if='sheet' style="background-color: white">
    Clickeat is better on the App.
    <a
      href="https://play.google.com/store/apps/details?id=com.clickEat.ug&hl=en&gl=US"
    >
      <v-btn text color="success" @click="sheet = !sheet">Use The App</v-btn>
    </a>
    <v-btn class="" text color="grey" @click="sheet = !sheet"
      >Continue in Browser</v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      sheet: true,
    };
  },
};
</script>

<style>
.fixed-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
</style>
<template>
  <div>
    <v-dialog :value="dialog" @click:outside='$store.state.showSigninModal=false' scrollable max-width="300px">
      <signin />
    </v-dialog>
  </div>
</template>

<script>
import Signin from "../views/Signin.vue";
export default {
  components: { Signin },
  
  computed: {
    dialog() {
      return this.$store.state.showSigninModal;
    },
  },
};
</script>

<style>
</style>
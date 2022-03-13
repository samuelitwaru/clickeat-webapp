<template>
  <div>
    <v-dialog :value="dialog" @click:outside='$store.state.showSigninModal=false' scrollable max-width="300px">
    </v-dialog>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello'
        }
    },
  computed: {
    dialog() {
      return this.$store.state.showMsgModal;
    },
  },
};
</script>

<style>
</style>
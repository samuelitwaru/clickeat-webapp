<template>
  <div>
    <v-dialog :value="dialog" @click:outside='$store.state.showMsgDialog=false' max-width="290"> </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    dialog() {
      return this.$store.state.showMsgDialog;
    },
  },
  created () {
  },
};
</script>

<style>
</style>
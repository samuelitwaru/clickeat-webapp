<template>
  <div>
    <v-dialog
      :value="dialog"
      @click:outside="$store.state.showMsgDialog = false"
      max-width="290"
    >
      <v-card>
        <v-card-title v-if='title' class="text-h5">{{title}}</v-card-title>
        <v-card-text>{{ msg }}</v-card-text>
        <v-card-actions v-if='action.url && action.text'>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$store.state.showMsgDialog = false">
            Close
          </v-btn>
          <router-link :to='action.url'>
            <v-btn color="primary" @click="$store.state.showMsgDialog = false">
              {{action.text}}
            </v-btn>
          </router-link>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$store.state.showMsgDialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    dialog() {
      return this.$store.state.showMsgDialog;
    },
    title() {
      return this.$store.state.title;
    },
    msg() {
      return this.$store.state.msg;
    },
    action() {
      return this.$store.state.action;
    },
  },
  created() {},
};
</script>

<style>
</style>
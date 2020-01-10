<template>
  <div id="app">
    <v-btn color="black" dark fixed center @click="dialog = !dialog" style="font-size:15px">login</v-btn>
    <v-dialog v-model="dialog" width="400px">
      <v-card>
        <v-card-title class="indigo" font-color="white">LOGIN</v-card-title>
        <v-container fluid>
          <v-layout wrap>
            <v-flex xs8>
              <v-text-field center prepend-icon="people" v-model="uid" label="userid" required></v-text-field>
              <v-text-field prepend-icon="lock" label="password" type="password" v-model="pwd"></v-text-field>
              <v-rating v-model="rating"></v-rating>
            </v-flex>
          </v-layout>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click.prevent="login(uid, pwd)">LOGIN</v-btn>
          <v-btn text color="red" @click="dialog = false">CANCEL</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      ctx: this.$store.state.common.context
    };
  },
  methods: {
    login(uid, pwd) {
      this.$store
        .dispatch("users/login", { uid: uid, pwd: pwd, context: this.ctx })
        .then(() => (this.$store.state.common.isAuth = true));
    }
  }
};
</script>
<style></style>
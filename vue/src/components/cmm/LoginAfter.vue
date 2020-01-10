<template>
  <div>
    <v-toolbar src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-toolbar-title>HealthGram</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar size="40">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
      </v-avatar>
      <v-text title>{{name}}님 환영합니다</v-text>
      <v-btn class="menu" text router-link to="/mypage">MyPage</v-btn>
      <v-btn color="primary-" dark v-on="on"  @click="logout" router-link to="/">LogOut</v-btn>
      <v-btn class="menu" text  router-link to="/routineNew">routine</v-btn>
      <v-btn class="menu" text router-link to="/center">트레이너/센터 찾기</v-btn>
      <v-btn class="menu" text router-link to="/board">게시판</v-btn>
      <v-toolbar-items>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "toolbar",
  methods: {
    logout() {
      alert("로그아웃");
      return this.$store.state.common.isAuth = false
    }
  },
  computed: {
    name() {
      return this.$store.state.users.user.uname;
    }
  }
};
</script>
<style scoped>
.menu{
  color : whitesmoke;
}
</style>
<template>
  <div id="app">
    <v-app id="inspire">
      <component :is="!loginCheck ? 'home' : 'login-after'"></component>
      <v-container fluid>
        <router-view />
      </v-container>
     <v-footer dark padless>
       <foot></foot>
     </v-footer>
    </v-app>
  </div>
</template>
<script>
import Home from "@/components/Home";
import SlideShow from "@/components/cmm/SlideShow.vue";
import MainMenu from "@/components/cmm/MainMenu.vue";
import LoginAfter from "@/components/cmm/LoginAfter.vue";
import Foot from "@/components/cmm/Foot.vue";
export default {
  name: "App",
  components: {
    Home,
    SlideShow,
    MainMenu,
    LoginAfter,
    Foot
  },
  computed: {
    loginCheck() {
      return this.$store.state.common.isAuth;
    }
  }
}
</script>
<style scoped>
</style>

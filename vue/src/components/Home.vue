<template>
  <div>
    <v-toolbar src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" fixed-header>
      <i class="material-icons">fitness_center</i>
      <v-toolbar-title class="white--text">Health Gram</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-row style="margin-right:100px; margin-top:14px;">
          <login />
        </v-row>
        <v-row style="margin-right:250px; margin-top:14px;">
          <join/>
        </v-row>
      </v-toolbar-items>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>
<script>
import Login from "@/components/auth/Login.vue";
import Join from '@/components/auth/Join.vue'
export default {
  name: "home",
  components: { Login ,Join },
}
</script>
<style scoped>
</style>
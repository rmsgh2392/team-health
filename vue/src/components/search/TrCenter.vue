<template>
  <div>
    <v-container max-width="1400" :margin="0" auto>
      <v-layout row wrap>
        <v-flex class="flex1">
          <v-navigation-drawer>
            <v-toolbar color="purple" dark flat vertical>
              <v-text-field
                append-icon="mic"
                class="mx-4"
                flat
                hide-details
                label="Search"
                prepend-inner-icon="search"
                solo-inverted
              ></v-text-field>
            </v-toolbar>
          </v-navigation-drawer>
        </v-flex>
        <v-flex class="flex2">
          <google-map />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import GoogleMap from "@/components/search/GoogleMap";
export default {
  components: { GoogleMap }
};
</script>
<style scoped>
.sectioninfo {
  text-align: center;
  padding-top: 10px;
  font-size: 14px !important;
}
.trainer {
  display: grid;
  grid-template-columns: 40% 40%;
  grid-template-rows: 40% 40%;
  border: 1px solid darkgray;
  height: 100%;
  width: 250%;
}
.z {
  border: 1px solid darkgray;
  grid-row: 1 / 2;
  height: 20%;
}
.z1 {
  border: 1px solid darkgray;
  grid-row: 1 / 3;
}
.search-box {
  width: 50%;
  border-radius: 20px;
  border: 1px solid lavender;
  text-align: center;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.flex1 {
  max-width: 20%;
}
.flex2 {
  max-width: 70%;
}
</style>
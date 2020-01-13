<template>
  <div>
    <v-system-bar text-align="center">안녕하세요</v-system-bar>
    <v-layout grid-list-xs text-xs-center>
      <v-flex id="flex1" xs="12" sm="6" md="4">
        <v-navigation-drawer>
          <v-card max-width="500" height="1000" class="mx-auto" v-bind:propsdata="message">
            <v-toolbar color="teal" dark>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-toolbar-title>Topics</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list>
              <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item v-for="subItem in item.items" :key="subItem.title">
                  <v-list-item-content>
                    <a v-text="subItem.title"></a>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-navigation-drawer>
      </v-flex>
      <v-flex>
        <div class="mypage">
          <div class="x1">
            <line-chart />
          </div>
          <div class="x2">
            <h1>x2</h1>
          </div>
          <div class="x3">
            <router-view/>
          </div>
          <div class="x4">
            <h1>{{info.uname}}</h1>
          </div>
          <!-- <div class="x5">
            <h1>ggg</h1>
          </div>
          <div class="x6">
            <h1>ggg</h1>
          </div>
          <div class="x7">
            <h1>ggg</h1>
          </div>
          <div class="x8">
            <h1>ggg</h1>
          </div>
          <div class="x9">
            <h1>ggg</h1>
          </div> -->
        </div>
      </v-flex>
    </v-layout>
    <v-footer>죽을래</v-footer>
  </div>
</template>
<script>
import LineChart from "@/components/chart/LineChart.vue";
export default {
  components: { LineChart },
  data() {
    return {
      chartSize: {
        width: "100%",
        position: "fixed"
      },
      message: "안녕하세요",
      items: [
        {
          action: "local_activity",
          title: "운동영상",
          items: [{ title: "가슴운동"}]
        },
        {
          action: "restaurant",
          title: "Dining",
          active: true,
          items: [
            { title: "Breakfast & brunch" },
            { title: "New American" },
            { title: "Sushi" }
          ]
        },
        {
          action: "school",
          title: "Education",
          items: [{ title: "List Item" }]
        },
        {
          action: "directions_run",
          title: "Family",
          items: [{ title: "List Item" }]
        },
        {
          action: "healing",
          title: "Health",
          items: [{ title: "List Item" }]
        },
        {
          action: "content_cut",
          title: "Office",
          items: [{ title: "List Item" }]
        },
        {
          action: "local_offer",
          title: "Promotions",
          items: [{ title: "List Item" }]
        }
      ]
    };
  },
  computed: {
    info() {
      return this.$store.state.users.user;
    }
  }
};
</script>
<style scoped>
.mypage {
  display: grid;
  height: 100%;
  grid-template-columns: 45% 30% ;
  grid-template-rows: 20% 30% 0%;
  border: 2px solid black;
}
.x1 {
  border: 1px solid lightgray;
  grid-row: 1 / 3;
}
.x2 {
  border: 1px solid lightgray;
  grid-column: 2 / 4;
}
.x3 {
  border: 1px solid lightgray;
  grid-row: 2 / 5;
  grid-column: 2 / 4;
}
.x4 {
  border: 1px solid lightgray;
  grid-row : 3 / 5;
}
.x5 {
  border: 1px solid lightgray;
}
.x6 {
  border: 1px solid lightgray;
}
.x7 {
  border: 1px solid lightgray;
}
.x8 {
  border: 1px solid lightgray;
}
.x9 {
  border: 1px solid lightgray;
}
#flex1 {
  max-width: 20%;
}
#flex2 {
  max-width: 100%;
}
</style>
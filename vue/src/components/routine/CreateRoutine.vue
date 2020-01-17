<template>
  <div>
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>새 루틴 생성하는 방법</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical>
        <v-tab v-for="list of lists" :key="list">
          <v-icon left>mdi-account</v-icon>
          {{list.keyword}}
        </v-tab>
        <v-tab-item v-for="list of lists" :key="list">
          <v-card flat>
            <v-card-text>
              <p>{{list.explain}}</p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>

    <v-container fluid>
      <v-layout row wrap>
        <v-flex>
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) of pictures "
              :key="i"
              :src="item.img"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex>
          <v-col cols="12" lg="8">
            <v-text-field label="키"></v-text-field>
          </v-col>
          <v-col cols="12" sm="8">
            <v-text-field label="몸무게"></v-text-field>
          </v-col>
          <v-col cols="12" sm="8">
            <v-text-field label="체지방량"></v-text-field>
          </v-col>
          <v-col cols="12" sm="8">
            <v-text-field label="골격근량"></v-text-field>
          </v-col>
          <v-col cols="12" sm="8">
            <v-select
              :items="divides"
              append-outer-icon="map"
              menu-props="auto"
              hide-details
              label="분할(숙련도에 맞게 선택하세요)"
              single-line
            ></v-select>
          </v-col>
          <v-btn color="error" class="mr-9" width="60%" @click="make">생성</v-btn>
        </v-flex>
        <v-flex>
          <v-row>
          <v-card max-width="200" v-for="choose of invite" :key="choose">
            <v-img :src="choose.src"></v-img>
            <v-card-title>추천상품</v-card-title>
          </v-card>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          keyword: "무분할",
          explain: "무분할입니다 무분할 운동법은 이렇게 저렇게 하는겁니다"
        },
        { keyword: "1분할", explain: "1분할입니다" },
        { keyword: "2분할", explain: "2분할입니다" },
        { keyword: "3분할", explain: "3분할입니다" },
        { keyword: "4분할", explain: "4분할입니다" },
        { keyword: "5분할", explain: "5분할입니다" }
      ],
      divides: ["무분할", "1분할", "2분할", "3분할", "4분할", "5분할"],
      pictures: [
        { img: require("@/assets/img/zero.jpg") },
        { img: require("@/assets/img/ironborn-intro.jpg") },
        { img: require("@/assets/img/hero-journey-intro.jpg") },
        { img: require("@/assets/img/totals-intro.jpg") }
      ],
      invite : [{src : require("@/assets/img/11.jpg")},{src : require("@/assets/img/12.jpg")},{src : require("@/assets/img/13.jpg")}]
    }
  },
  methods: {
    make() {
      alert("생성완료");
      this.$router.push(`/existRoutine`);
    }
  },
  computed: {
    info() {
      return this.$store.state.users.user;
    }
  }
};
</script>
<style></style>
<template>
  <div>
    <v-container>
      <main id="content" role="main" class>
        <div class="content-top"></div>
        <div id="system-message-container"></div>

        <div class="blog darepage" itemscope itemtype="https://schema.org/Blog">
          <div class="category-desc clearfix">
            <div class="sectioninfo">
              Not sure? Here is
              <strong>
                <a href="/pick-a-program.html">원하시는 운동을 고르세요 !!</a>
              </strong>
            </div>
          </div>
          <v-row>
            <v-col v-for="i of routines" :key="i.id">
              <v-card class="mx-auto" max-width="350" min-height="300">
                <v-img @click="load(i.id)" class="white--text align-end" height="100%" :src="i.img">
                  <v-card-title></v-card-title>
                </v-img>
                <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
                <v-card-text class="text--primary">
                  <div>운동1</div>
                  <div>{{i.title}}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </main>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routines: [
        { img: require("@/assets/img/zero.jpg"), id: "1" ,title : '3분할 가슴운동'},
        { img: require("@/assets/img/baseline1.jpg"), id: "2",title : '3분할 등운동'},
        { img: require("@/assets/img/30-days-of-yoga-intro.jpg"), id: "3" ,title : '3분할 복근운동'},
        { img: require("@/assets/img/power-up-intro.jpg"), id: "4" ,title : '3분할 어깨운동'},
        { img: require("@/assets/img/cardio-go-intro.jpg"), id: "5" ,title : '3분할 하체운동'},
        { img: require("@/assets/img/full-circuit-intro.jpg"), id: "6" ,title : '3분할 팔운동'},
        { img: require("@/assets/img/epic-five-intro.jpg"), id: "7" ,title : '2분할 가슴운동'},
        { img: require("@/assets/img/back-and-core-intro.jpg"), id: "8" ,title : '2분할 등운동'},
        { img: require("@/assets/img/carbon-and-dust-intro.jpg"), id: "9" ,title : '2분할 하체운동'},
        { img: require("@/assets/img/power-cardio-intro.jpg"), id: "10" ,title : '2분할 어깨운동'},
        { img: require("@/assets/img/athenas-playbook-intro.jpg"), id: "11",title : '2분할 팔운동' },
        { img: require("@/assets/img/ironborn-intro.jpg"), id: "12" ,title : '무분할 가슴운동'},
        { img: require("@/assets/img/totals-intro.jpg"), id: "13" ,title : '무분할 등운동'},
        { img: require("@/assets/img/boxer-prime-intro.jpg"), id: "14" ,title : '무분할 하체운동'},
        { img: require("@/assets/img/cardio-trim-intro.jpg"), id: "15" ,title : '무분할 어깨운동'}]
    };
  },
  methods: {
    load(id) {
      alert("클릭");
      switch (id) {
        case '1': return this.$router.push(`/action`)
        case '2': return this.$router.push(`/baseLine`)
        case '3': return this.$router.push(`/yoga`)
        case '4': return this.$router.push(`/powerUp`)
        case '5': return this.$router.push(`/cardio`)
        case '6': return this.$router.push(`/circuit`)
        case '7': return this.$router.push(`/epicFive`)
        case '8': return this.$router.push(`/backCore`)
        case '9': return this.$router.push(`/carbonDust`)
        case '10': return this.$router.push(`/pcardio`)
        case '11': return this.$router.push(`/althena`)
        case '12': return this.$router.push(`/ironBorn`)
        case '13': return this.$router.push(`/totals`)
        case '14': return this.$router.push(`/boxer`)
        case '15': return this.$router.push(`/cardioTrim`)
      }
    }
  }
}
</script>
<style scoped>
*,
*:after,
*:before {
  box-sizing: border-box;
}
#system-message-container {
  margin: 0;
  position: relative;
}
.blog.darepage {
  padding: 0 27px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
  line-height: 0;
}
.sectioninfo {
  text-align: center;
  padding-top: 10px;
  font-size: 14px !important;
}
.clearfix:after {
  clear: both;
}
@media (min-width: 900px) {
  .row-fluid {
    width: 100%;
  }
  .row-fluid:before,
  .row-fluid:after {
    display: table;
    content: "";
    line-height: 0;
  }
  .row-fluid [class*="span"]:first-child {
    margin-left: 0;
  }
  .row-fluid .span4 {
    width: 31.914893614%;
  }
  .row-fluid [class*="span"] {
    display: block;
    min-height: 28px;
    box-sizing: border-box;
    float: left;
    margin-left: 2.127659574%;
  }
}
.row-fluid {
  background: lightgray;
}
.blog .item-image {
  padding: 10px 0 !important;
}
a {
  color: #cc0000;
  text-decoration: none;
}
img {
  height: auto;
  vertical-align: middle;
  border: 0;
  max-width: 100%;
}
</style>
<template>
  <div>
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">Hell Chang</h1>
      </v-card-title>

      <v-tabs v-model="tab" background-color color="basil" grow>
        <v-tab  v-for="j of item" :key="j">{{ j }}</v-tab>
      </v-tabs>
    </v-card>
    <!--운동정보-->
    <v-container fluid  class="brown darken-1">
      <v-stepper v-model="e1" height="700">
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" editable>Step {{ n }}</v-stepper-step>

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n" height="500px">
            <v-card class="mb-12" color="grey lighten-1" height="200px" v-for="t of todos" :key="t">
              <v-card-title>{{t.todo}}</v-card-title>
              <p>{{t.content}}</p>
            </v-card>
            <v-btn color="primary" @click="nextStep(n)">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "안녕하세요",
      item: ["오늘 할 운동", "운동영상", "체크", "확인"],
      e1: 1,
      steps: 5,
      todos: [
        { todo: "가슴운동" ,content : '가슴운동은 이렇게'},
        { todo: "하체운동" ,content : '하체운동은 이렇게'},
        { todo: "어꺠운동" ,content : '어꺠운동은 이렇게'},
        { todo: "등운동" ,content : '등운동은 이렇게'},
        { todo: "팔운동" ,content : '팔운동은 이렇게'}
      ]
    };
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    }
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    }
  },
  computed: {
    info() {
      return this.$store.state.users.user;
    }
  }
};
</script>
<style scoped>
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
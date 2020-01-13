<template>
  <div>
    <v-container fluid color="black">
      <v-layout row wrap>
        <v-flex class="newR">
          <v-col>
            <v-hover>
              <template v-slot="{hover}">
                <v-card
                  :elevation="hover ? 24 : 6"
                  class="mx-auto"
                  max-width="500"
                  height="500"
                  raised
                  loading
                  @click="newMove()"
                >
                  <v-img src="@/assets/gg.png" class="dark" height="80%"></v-img>
                  <v-card-title>
                    <span class="title font-weight-light">
                      <strong>새로운 루틴</strong>
                    </span>
                  </v-card-title>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-flex>
        <v-flex clss="routine">
			<v-hover>
              <template v-slot="{hover}">
                <v-card
                  :elevation="hover ? 24 : 6"
                  class="mx-auto"
                  max-width="500"
                  height="500"
                  raised
                  loading
                  @click="ExistMove()"
                >
                  <v-img src="@/assets/img/qq.png" class="dark" height="80%"></v-img>
                  <v-card-title>
                    <span class="title font-weight-light">
                      <strong>기존 루틴</strong>
                    </span>
                  </v-card-title>
                </v-card>
              </template>
            </v-hover>
		</v-flex>
      </v-layout>
    </v-container>
	<v-footer color="red" height="200%">
		<v-row>
		<v-col>
		<h1>원하시는 대로 Service을 누리세요</h1>
		</v-col>
		</v-row>
		<v-row>
		<v-col>
		<p>새로운 루틴을 생성하시고 싶으면 새로운 루틴을 누르셔서 다시 레벨업 된 자기 모습을 보세요</p>
		</v-col>
		</v-row>
		<v-row>
		<v-col>
		<p>아직까지 운동을 안하시는분들 분발하세요</p>
		</v-col>
		</v-row>
	</v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    newMove() {
      alert("루틴 생성하러 가기");
      this.$router.push(`/createRoutine`)
    },
    ExistMove(){
      this.$router.push(`/existRoutine`)
    }
  }
};
</script>
<style scoped>
.newR {
  max-width: 50%;
}
.routine {
  max-width: 50%;
}
</style>

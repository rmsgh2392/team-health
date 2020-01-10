<template>
<div>
	<v-row dense>
	<v-col v-for="i of imgs"
	:key="i.msg">
    <v-card
      class="mx-auto"
      max-width="500"
	min-height="500"
    >
      <v-img
        class="white--text align-end"
        height="100%"
        :src=i.src
      >
        <v-card-title></v-card-title>
      </v-img>
  
      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
  
      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>
  
        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
		
          color="orange"
          text
        >
        공유
        </v-btn>
  
        <v-btn
          color="orange"
          text
        >
        영상>>>
        </v-btn>
      </v-card-actions>
    </v-card>
	</v-col>
	</v-row>
</div>
</template>
<script>
export default {
	data(){
		return {
			imgs : [{msg :'1',src :require('@/assets/img/main.jpg')},
					{msg :'2',src :require('@/assets/img/backG.png')},
					{msg :'3',src :require('@/assets/img/exercise.jpg')}]
		}
	}
}
</script>
<style scoped></style>
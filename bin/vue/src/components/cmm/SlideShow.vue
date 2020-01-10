<template>
<div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) of items "
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
</div>
</template>
<script>
export default{
	name : 'slide-show',
	data(){
		return {
			items :[{msg : 'First',src : require('@/assets/img/1.jpg')},
					{msg : 'Second',src : require('@/assets/img/2.jpg')},
					{msg : 'Third',src : require('@/assets/img/backG.png')},
					{msg : 'Fourth',src : require('@/assets/img/exercise.jpg')}],
		}
	}
}
</script>
<style scoped></style>
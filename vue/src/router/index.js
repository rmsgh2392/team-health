import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Home from '@/components/Home.vue'
import Routine from '@/components/routine/Routine.vue'
import Main from '@/components/cmm/Main.vue'
import Join from '@/components/auth/Join.vue'
import Mypage from '@/components/auth/Mypage.vue'
import LineChart from '@/components/chart/LineChart.vue'
import TrCenter from '@/components/search/TrCenter.vue'
import RoutineNew from '@/components/routine/RoutineNew'
import CreateRoutine from '@/components/routine/CreateRoutine'
import ExistRoutine from '@/components/routine/ExistRoutine.vue'
import Community from '@/components/board/Community.vue'
import PostCard from '@/components/board/PostCard.vue'
import Profile from '@/components/board/Profile.vue'
import FileUp from '@/components/cmm/FileUp.vue'
Vue.use(Router)
export default new Router({
	mode : 'history',
	routes :[{path : '/',name :'main',component : Main},
			{path : '/home',name:'home',component : Home},
			{path : '/app',name :'app',component : App},
			{path :'/routine',name:'routine',component :Routine},
			{path: '/mypage',name : 'mypage',component:Mypage},
			{path:'/join',name :'join',component : Join},
			{path:'/lineChart',name:'lineChart',component :LineChart},
			{path:'/center',name :'center',component : TrCenter},
			{path:'/routineNew',name :'routineNew',component : RoutineNew},
			{path: '/createRoutine',name :'createRoutine',component : CreateRoutine},
			{path:'/existRoutine',name : 'existRoutine',component : ExistRoutine},
			{path : '/community',name : 'community',component :Community},
			{path : '/postCard',name : 'postCard',component : PostCard},
			{path : '/profile',name : 'profile',component :Profile},
			{path : '/fileUp',name : 'fileUp',component :FileUp}]
		})
		
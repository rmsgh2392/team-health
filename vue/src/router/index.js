import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Home from '@/components/Home.vue'
import Routine from '@/components/routine/Routine.vue'
import Board from '@/components/board/Board.vue'
import Main from '@/components/cmm/Main.vue'
import Join from '@/components/auth/Join.vue'
import Mypage from '@/components/auth/Mypage.vue'
import LineChart from '@/components/chart/LineChart.vue'
import Video from '@/components/video/Video.vue'
import Action from '@/components/routine/Action.vue'
import BaseLine from '@/components/routine/BaseLine.vue'
import Althena from '@/components/routine/Althena.vue'
import BackCore from '@/components/routine/BackCore.vue'
import Boxer from '@/components/routine/Boxer.vue'
import CarbonAndDust from '@/components/routine/CarbonAndDust.vue'
import CardioTrim from '@/components/routine/CardioTrim.vue'
import Circuit from '@/components/routine/Circuit.vue'
import EpicFive from '@/components/routine/EpicFive.vue'
import IronBorn from '@/components/routine/IronBorn.vue'
import Pcardio from '@/components/routine/Pcardio.vue'
import PowerUp from '@/components/routine/PowerUp.vue'
import Totals from '@/components/routine/Totals.vue'
import Yoga from '@/components/routine/Yoga.vue'
import Cardio from '@/components/routine/Cardio.vue'
import TrCenter from '@/components/search/TrCenter.vue'
import RoutineNew from '@/components/routine/RoutineNew'
Vue.use(Router)
export default new Router({
	mode : 'history',
	routes :[{path : '/',name :'main',component : Main},
			{path : '/home',name:'home',component : Home},
			{path : '/app',name :'app',component : App},
			{path :'/routine',name:'routine',component :Routine},
			{path: '/mypage',name : 'mypage',component:Mypage},
			{path: '/board',name : 'board',component : Board},
			{path:'/join',name :'join',component : Join},
			{path:'/lineChart',name:'lineChart',component :LineChart},
			{path:'/video',name:'video',component :Video},
			{path:'/action',name:'action',component :Action},
			{path:'/baseLine',name :'baseLine',component : BaseLine},
			{path:'/althena',name :'althena',component : Althena},
			{path:'/backCore',name :'backCore',component : BackCore},
			{path:'/boxer',name :'boxer',component : Boxer},
			{path:'/carbonDust',name :'carbonDust',component : CarbonAndDust},
			{path:'/cardioTrim',name :'cardioTrim',component : CardioTrim},
			{path:'/circuit',name :'circuit',component : Circuit},
			{path:'/epicFive',name :'epicFive',component : EpicFive},
			{path:'/ironBorn',name :'ironBorn',component : IronBorn},
			{path:'/pcardio',name :'pcardio',component : Pcardio},
			{path:'/powerUp',name :'powerUp',component : PowerUp},
			{path:'/totals',name :'totals',component : Totals},
			{path:'/yoga',name :'yoga',component : Yoga},
			{path:'/cardio',name :'cardio',component : Cardio},
			{path:'/center',name :'center',component : TrCenter},
			{path:'/routineNew',name :'routineNew',component : RoutineNew}]
})

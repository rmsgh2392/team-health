import Vue from 'vue'
import Vuex from 'vuex'
import common from '@/store/modules/common'
import users from '@/store/modules/users'
Vue.use(Vuex)
export const store = new Vuex.Store({
	modules : {
		common,
		users
	},
	strict : true
})

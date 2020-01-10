export default {
	name : 'common',
	namespaced : true,
	state : {
		isAuth : false,
		context : 'http://localhost:8080/'
	},
	getters : {
		getIsAuth : state => state.isAuth,
		getContext : state => state.context
	},
	actions : {},
	mutations : {}
}

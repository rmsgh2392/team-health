import axios from 'axios'
export default {
	name: 'users',
	namespaced: true,
	state: {
		user: []
	},
	getters: {
		getUser : state => state.user.uname,
		// countUser : state => {
		// 	let count = 0
		// 	alert(`${state.user}`)
		// 	state.user.forEach(i =>{
		// 		if(i.addr ==='seoul') count++
		// 	})
		// 	return count
		// },
		// allUserCount : state => {
		// 	return state.user.length
		// },
		getContext: state => state.context,
		getUserName: state => state.userName
	},
	actions: {
		login({ commit }, { uid, pwd, context }) {
			alert(`넘어온 아이디 ${uid} ${pwd}`)
			let url = `${context}login`
			axios
				.post(url, { uid, pwd }, {
					'authorization': 'JWT fefege..',
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				})
				.then(({ data }) => { commit('LOGIN', data) })
				.catch(() => { alert(`axios실패`) })
		}
	},
	mutations: {
		LOGIN(state, data) {
			alert(`뮤테이션 들어옴`)
			state.user = data.user
			alert(`로그인 성공 ${state.user.addr}`)
		}
	}
}

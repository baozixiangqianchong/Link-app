import {
	defineStore
} from 'pinia'
//创建用户小仓库
const useUserStore = defineStore('User', {
	state: () => {
		return {
			count: 0
		}
	}
})

//暴露用户小仓库
export default useUserStore
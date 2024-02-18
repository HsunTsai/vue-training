import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
	//定義狀態初始值
	state: () => ({ count: 0, name: 'Eduardo' }),
	//對狀態加工的 getters，如同 computed
	getters: {
		doubleCount: (state) => state.count * 2,
		add: (state) => {
			state.count++
		},
		minus: (state) => {
			state.count--
		}
	},
	//定義使用到的函式，可以為同步和非同步，如同 method
	actions: {
		increase() {
			this.count++
		},
		decrease() {
			this.count--
		}
	}
})

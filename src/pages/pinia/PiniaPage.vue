<script setup>
import { useCounterStore } from '@stores/useCounterStore.js'
import './piniaPage.scss'

const counterStore = useCounterStore()
</script>

<template>
	<div class="piniaPage">
		<h2>counter</h2>
		<!-- 取得的 state 會響應式更新 -->
		<p>{{ counterStore.count }}</p>

		<!-- 可以呼叫 store 內定義的方法來修改 state -->
		<button @click="counterStore.increase">+</button>
		<!-- 也可以直接修改 state -->
		<button @click="counterStore.count++">+</button>
	</div>
</template>

<script setup>
import './personList.scss'

const emit = defineEmits(['onAdd'])
const { data } = defineProps(['data'])
console.info('data', data)

const handleClick = () => {
	console.info('XDD')
	emit('onAdd', 'hello132')
}
</script>

<template>
	<div class="personList">
		<div class="personList__list" v-for="item in data" :key="item.id">{{ item.name }}</div>
		<slot></slot>
		<button @click="handleClick">click to add</button>
	</div>
</template>

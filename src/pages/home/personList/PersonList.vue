<script setup>
import './personList.scss'

const emit = defineEmits(['onClick'])
const { data } = defineProps(['data'])
console.info('data', data)

const handleClick = () => {
	console.info('XDD')
	emit('onClick', 'hello132')
}
</script>

<template>
	<div class="personList">
		<button @click="handleClick">click callback</button>
		<div class="personList__list" v-for="item in data" :key="item.id">{{ item.name }}</div>
		<slot></slot>
	</div>
</template>

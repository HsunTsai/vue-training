<script setup>
import './trainingBlock.scss'

const { title } = defineProps(['title'])
</script>

<template>
	<div class="trainingBlock">
		<div class="trainingBlock__title" v-if="title">. {{ title }}</div>
		<slot></slot>
	</div>
</template>

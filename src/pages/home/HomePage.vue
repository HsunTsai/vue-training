<script setup>
// import TheWelcome from '../../components/TheWelcome.vue'
import { reactive, ref, watch } from 'vue'
import TrainingBlock from './trainingBlock/TrainingBlock.vue'
import PersonList from './personList/PersonList.vue'
import oriArrayData from './arrayData.json'
import data from './data.json'
import './homePage.scss'

const userData = reactive({ name: 'Hsun', phone: '0953818767', count: 1 })
const arrayData = reactive(oriArrayData)
const inputValue = ref('456789')

watch(arrayData, () => console.info('??', arrayData))
watch(inputValue, () => console.info('inputValue', inputValue))
</script>

<template>
	<div class="homePage">
		<TrainingBlock :title="'人員列表'">
			<PersonList
				@on-add="(value) => arrayData.push({ id: arrayData?.length + 1, name: `Hsun${arrayData?.length + 1}` })"
				:data="arrayData"
			/>
		</TrainingBlock>

		<TrainingBlock>
			<!-- [清單] 產品 -->
			<div class="homePage__product" v-for="(product, key) in data" :key="key">
				<div class="homePage__product__title">{{ key }}</div>
				<div
					class="homePage__product__item"
					v-for="(item, key, index) in product"
					:key="key"
					:style="{ background: index % 2 === 0 ? 'pink' : 'lightBlue' }"
				>
					<!-- <span class="homePage__product__item__name">{{ key }}</span> -->
					<span class="homePage__product__item__value">{{ item }}</span>
				</div>
			</div>
		</TrainingBlock>

		<TrainingBlock>
			<div>{{ userData?.name }}: {{ userData?.phone }} ({{ userData.count }})</div>
			<button @click="() => (userData.count = Number.isInteger(userData?.count) ? userData?.count + 1 : 0)">Add user count</button>
		</TrainingBlock>

		<TrainingBlock>
			<input :value="inputValue" @input="(event) => (inputValue = event.target.value)" />
			<!-- <button @click="() => console.info('inputValue', inputValue.value)">XD</button> -->
			<div>{{ inputValue }}</div>
		</TrainingBlock>
	</div>
</template>

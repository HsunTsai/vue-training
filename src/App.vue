<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { routes } from './router'
import './app.scss'
</script>

<template>
	<!-- <header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<HelloWorld msg="You did it!" />

			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
	</header> -->

	<div class="app">
		<div class="app__links">
			<RouterLink class="app__links__item" v-for="{ path, name } in routes" :key="path" :to="path">{{ name }}</RouterLink>
		</div>
		<RouterView />
	</div>
</template>

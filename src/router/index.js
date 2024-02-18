import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
import PiniaPage from '../pages/pinia/PiniaPage.vue'

export const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/pinia',
		name: 'pinia',
		component: PiniaPage
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../pages/about/AboutPage.vue')
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router

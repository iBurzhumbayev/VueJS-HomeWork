import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue';
import Contacts from '../components/Contacts.vue'
import Gallery from '../components/Gallery.vue'
import Img from '../components/Img.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: Main
		},
		{
			path: '/contacts',
			component: Contacts,
		},
		{
			path: '/gallery',
			component: Gallery,
		},
		{
			path: '/gallery/:id',
			component: Img,
		}
	]
})

export default router
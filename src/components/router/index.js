import { createRouter, createWebHistory } from 'vue-router'

import About from '../pages/AboutView.vue'
import ContextExampleViewVue from '../pages/ContextExampleView.vue'
import Home from '../pages/HomeView.vue'
import JobDetails from '../pages/JobDetailsView.vue'
import Jobs from '../pages/JobsView.vue'
import Landing from '../pages/LandingView.vue'

const routes = [
    {
        path: '/',
        name: 'LandingView',
        component: Landing,
    },
    {
        path: '/home',
        name: 'HomeView',
        component: Home,
    },
    {
        path: '/about',
        name: 'AboutView',
        component: About,
    },
    {
        path: '/jobs',
        name: 'JobsView',
        component: Jobs,
    },
    {
        path: '/jobs/:id',
        name: 'JobDetailsView',
        component: JobDetails,
        props: true,
    },
    {
        path: '/context',
        name: 'ContextExampleView',
        component: ContextExampleViewVue,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router

<template>
    <div>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

        <div id="nav">
            <router-link to="/">Landing</router-link>
            <router-link :to="{ name: 'AboutView' }">About</router-link>
            <router-link :to="{ name: 'HomeView' }">home</router-link>
            <router-link :to="{ name: 'JobsView' }">Jobs</router-link>
        </div>

        <button @click="redirect">Redirect</button>
        <button @click="back">Go back</button>
        <button @click="forward">Go forward</button>

        <router-view />
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import './assets/global.css'

export default {
    name: 'App',
    components: {},
    methods: {
        redirect() {
            this.$router.push({ name: 'Home' })
        },
        back() {
            this.$router.go(-1)
        },
        forward() {
            this.$router.go(1)
        },
    },
}
</script>

<style>
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
}

#nav a.router-link-exact-active {
    color: white;
    background: crimson;
}
</style>

<template>
    <div>
        <h1>Jobs</h1>
        <div v-for="job in jobs" :key="job.id" class="job">
            <router-link
                :to="{ name: 'JobDetailsView', params: { id: job.id } }"
            >
                <h2>{{ job.title }}</h2>
            </router-link>
        </div>

        <div v-if="promos.length">
            <div v-for="promo in promos" :key="promo.mal_id" class="job">
                <span>{{ promo.title }},</span>
            </div>
        </div>

        <div v-else>
            <p>Loading promos...</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JobsView',
    components: {},
    data() {
        return {
            jobs: [
                { title: 'Ninja UX Designer', id: 1, details: 'lorem' },
                { title: 'Ninja Web Developer', id: 2, details: 'lorem' },
                { title: 'Ninja Vue Developer', id: 3, details: 'lorem' },
            ],
            promos: [],
        }
    },

    async mounted() {
        try {
            const response = await fetch(
                'https://anime-enma.vercel.app/api/promos'
            )
            const data = await response.json()
            this.promos = data.data.promos
        } catch (err) {
            console.error(err.message)
        }
    },
}
</script>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}
.job h2:hover {
    background: #ddd;
}
.job a {
    text-decoration: none;
}
</style>

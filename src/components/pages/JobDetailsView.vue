<template>
    <div v-if="id !== undefined">
        <h1>Job Details</h1>
        <!-- <p>The job id is {{ $route.params.id }}</p> -->
        <p>The job id is {{ id }}</p>
    </div>
</template>

<script>
export default {
    name: 'JobDetailsView',
    props: ['id'],
}
</script>

<style></style>

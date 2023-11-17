<template>
    <div>
        <h1>{{ header }}</h1>
        <h4 :class="{ sale : theme === 'sale' }">{{ text }}</h4>
        <p>{{ subtext }}</p>
    </div>
</template>

<script>
export default {
    name: 'PropsPassing',
    props: ['header', 'text', 'subtext' , 'theme'],
    data() {
        return {
          
        } 
    },
    methods: {
    },
}
</script>

<style>
.sale{
    color: green;
}
</style>
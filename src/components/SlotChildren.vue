<template>
  <div>
    <p>outside slot</p>
    <slot></slot>
    <p>outside slot</p>
  </div>
</template>

<script>
export default {
    name: 'SlotChildren',
    props: {},
    data() {
        return {} 
    },
    methods: {
    },
}
</script>

<style>

</style>
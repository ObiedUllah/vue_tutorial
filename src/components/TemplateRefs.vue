<template>
  <div>
    <input type="text" ref="name"/>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
export default {
 name: 'TemplateRefs',
    props: {},
    data() {
        return {
            title : "testing the refs"
        } 
    },
    methods: {
        handleClick() {
            console.log(this.$refs.name)
            this.$refs.name.classList.add("active")
            this.$refs.name.focus()
        }
    },
}
</script>

<style scoped>
.active{
    border: 1px solid red;
}
</style>
<template>
  <div>
       <div class="box" @mouseover="handlEvent($event, 20)">mouseOver (Enter)</div>
       <div class="box" @mouseleave="handlEvent($event, 'hello')">mouseLeave</div>
       <div class="box" @dblclick="handlEvent">double click</div>
       <div class="box" @mousemove="handleMouseMove"> position: {{ x }}, {{ y }}</div>

  </div>
</template>

<script>
export default {
    name: 'MouseEvents',
    props: {},
    data() {
        return {
            x : 0,
            y: 0
        } 
    },
    methods: {
        handlEvent(e, input)  {
            if (input) console.log(input);
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
}
</script>

<style scoped>
.box {
    padding: 100px 0;
    width: 400px;
    text-align: center;
    margin: 20px;
    display: inline-block;
    background: greenyellow;
}
</style>
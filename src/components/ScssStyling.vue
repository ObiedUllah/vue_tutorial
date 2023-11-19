<template>
    <div class="container">
        <div class="box" :style="{ '--box-color': box1Color }">Box 1</div>
        <div class="box" :style="{ '--box-color': box2Color }">Box 2</div>
        <div class="box" :style="{ '--box-color': box3Color }">Box 3</div>
        <div class="box" :style="{ '--box-color': box4Color }">Box 4</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            box1Color: 'blue',
            box2Color: 'green',
            box3Color: 'red',
            box4Color: 'yellow',
        }
    },
}
</script>

<style lang="scss" scoped>
// Define a mixin with a CSS custom property
@mixin box-styles {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    margin: 10px;
    background-color: var(--box-color);
    color: black;
    transition: background-color 0.3s ease; // Add a smooth transition
}

.container {
    display: flex;
    justify-content: space-around;
    margin: 20px;
}

.box {
    @include box-styles;

    &:hover {
        background: #333;
        cursor: pointer;
    }
}
</style>

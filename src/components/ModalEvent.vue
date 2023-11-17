<template>
  <div v-if="show" class="box" @click.self="closeModal">
    <div class="content">
        <div class="text">MODAL IS OPEN</div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'ModalEvent',
    props: {
        show: Boolean,
    },
    data() {
        return {} 
    },
    methods: {
        closeModal(){
            this.$emit('close')
        }
    },
}
</script>

<style scoped>
.box {
    display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	backdrop-filter: blur(5px);
}
.content {
	position: relative;
	padding: 20px;
	border-radius: 8px;
	max-width: 400px;
	text-align: center;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	z-index: 1001;
    background: gray;
}

.text{
    font-size: 1.3rem;
	margin-bottom: 10px;
    color: black;
}
</style>
<template>
  <div>
    <h2>{{ title }}  by  {{ author }} - {{ age }}</h2>
        <button @click="changeTitle" class="changeTitleButton">Swap Title</button>
        <button @click="age++" class="increaseAgeButton">increase age</button>
        <button @click="age--" class="reduceAgeButton ">reduce age</button>
        <button @click="title = 'Jujutsu Kaisen'" class="setNewTitleButton ">Set title to jjk</button>
        <button @click="changeTitleParam(`Chainsaw Man`)" class="changeTitleButton ">Set title to csm</button>
    
        <p>Cond rendering</p>
        <button @click="changeShowBook" class="setNewTitleButton "> {{ showBook ? "Hide" : "Show"}} </button>
        <h2 v-if="showBook">{{ title }}  by  {{ author }} - {{ age }} and this is adding/removing from the dom</h2>
        <h2 v-else>not showing</h2>

        
        <p v-show="showBook"> v-show is doing display block/none, used  for stuyff that changes often like  dropdowns {{ showBook }}</p>



</div>
</template>

<script>

export default {
    name: 'StateChange',
    props: {},
    data() {
        return {
            showBook : true,
            title: "One Piece",
            author: "Oda",
            age : 40,
        };
    },
    methods: {
        changeTitle() {
            if(this.title === "One Piece"){
                this.title = 'Naruto';
                this.author = "Kishimoto"
                this.age = 30;
            }
            else {
                this.title = 'One Piece';
                this.author = "Oda"
                this.age = 40;
            }
         },
         changeTitleParam(title){
            this.title = title;
         },
         changeShowBook() {
            this.showBook = !this.showBook
         }
     },
};
</script>

<style scoped>
button {
    padding: 20px;
    cursor : pointer;
    margin: 0px 10px;
}
.changeTitleButton {
  background-color: #3498db;
  color: #fff;
}

.increaseAgeButton {
  background-color: #2ecc71;
  color: #fff;
}

.reduceAgeButton {
  background-color: #e74c3c;
  color: #fff;
}

.setNewTitleButton {
  background-color: #f39c12;
  color: #fff;
}
</style>
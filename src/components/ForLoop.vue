<template>
  <div>
    <h2>List of Fruits</h2>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">{{ fruit }}</li>
    </ul>
    
     <h2>List of Students</h2>
    <ul>
      <li v-for="(student, index) in students" :key="index">
        {{ student.name }} - Age: {{ student.age }}
      </li>
    </ul>

    <p>single student : {{ students[0].name  }} + {{ students[0].age  }}</p>
    </div>
</template>

<script>
export default {
    name: 'ForLoop',
    props: {},
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry'],
            students: [
                { name: 'John', age: 20 },
                { name: 'Alice', age: 22 },
                { name: 'Bob', age: 21 },
                { name: 'Eva', age: 23 },
        ],
        } 
    },
    methods: {
    },
}
</script>

<style>

</style>
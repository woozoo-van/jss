<script setup>
import { computed, ref } from 'vue';

let id = 0;
let todos = ref([
    { id: id++, text: "할일 할일", done: false }
]);

let todo = ref('')

function addTodo() {
    let newTodo = {
        id: id++,
        text: todo.value,
        done: false
    }

    todos.value.push(newTodo);
    todo.value = ''
}

function completeTodo(todo) {
    console.log(todos.value[todo.id]);
    todo.done = true;
    console.log(todos.value[todo.id]);
}

const filterdTodos = computed(() => {

});

</script>

<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <label :class="{ done: todo.done }">
                    <input type="checkbox" @click="completeTodo(todo)">
                    {{ todo.text }}
                </label>


            </li>
        </ul>

        <input v-model="todo" placeholder="new todo">
        <button @click="addTodo">할 일 추가</button>
    </div>
</template>

<style scoped>
div {
    border: 1px solid powderblue;
    border-radius: 2px;
    padding: 1em 2em;
}

.done {
    text-decoration: line-through;
}
</style>
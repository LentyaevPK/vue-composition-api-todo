<template>
    <ul class="list-group">
        <form class="form" @submit.prevent="addTodo">
            <input type="text" class="form__input" v-model="form.title">
            <button type="submit" :disabled="!form.title.trim()">Add Todo</button>
        </form>
        <select class="filter" v-model="select.option">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
        <div v-if="filteredTodos.length">
            <TodoItem
                v-for="todo in filteredTodos"
                :key="todo.title"
                :todo="todo"
                @removeTodo="removeTodo"
            />
        </div>
        <h2 v-else>No Todos!</h2>
    </ul>
</template>

<script>
import TodoItem from './TodoItem'
import { useTodoList } from '../composition/todoList';

export default {
    components: {
        TodoItem
    },
    setup() {
        return {
            ...useTodoList()
        }
    }
}
</script>

<style lang="scss">
.form {
    width: 100%;

    &__input {
        margin: 10px;
        width: 80%;
    }
}

.filter {
    margin: 15px 0;
    width: 20%;
}
</style>
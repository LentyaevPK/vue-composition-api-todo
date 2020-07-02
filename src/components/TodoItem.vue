<template>
    <li :class="['list-group-item', {'list-group-item--crosslined': todo.completed}]">
        <input type="checkbox" @click="todo.completed = !todo.completed">
            {{todo.title}}
        <button class="list-group-item__button" @click="$emit('removeTodo', todo.id)">&#10006;</button>
    </li>
</template>

<script>

export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.list-group-item {
    text-align: left;

    &__button {
        float: right;
    }

    &--crosslined {
        text-decoration: line-through;
    }
}
</style>
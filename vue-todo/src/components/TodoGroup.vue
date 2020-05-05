<template>
    <div>
        <div class="todo-group__header">
            <span class="pointer">X</span>
        </div>
        <div class="todo-group__body">
            <h3>{{ group.name }}</h3>
            <Todo v-for="todo in group.todos" :todo="todo" :key="todo.name" />
            <input type="text" placeholder="Nowa rzecz" />
            <input class="btn" type="button" value="Dodaj nową rzecz!" />
        </div>
    </div>
</template>

<script>
import Todo from './Todo'
export default {
    name: 'TodoGroup',
    components: { Todo },
    props: {
        group: Object,
    },
}
</script>

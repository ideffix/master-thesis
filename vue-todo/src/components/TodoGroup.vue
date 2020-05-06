<template>
    <div>
        <div class="todo-group__header">
            <span class="pointer">X</span>
        </div>
        <div class="todo-group__body">
            <h3>{{ group.name }}</h3>
            <Todo
                v-for="todo in group.todos"
                :todo="todo"
                :key="todo.name"
                @on-todo-change="changeTodo"
                @on-todo-remove="removeTodo"
            />
            <input
                type="text"
                placeholder="Nowa rzecz"
                v-model="newTodo.name"
            />
            <input
                class="btn"
                type="button"
                value="Dodaj nową rzecz!"
                @click="addNewTodo"
            />
        </div>
    </div>
</template>

<script>
import Todo from './Todo'
export default {
    name: 'TodoGroup',
    components: { Todo },
    data: () => ({
        newTodo: { name: '', done: false },
    }),
    props: {
        group: Object,
        onNewTodoAdd: Function,
        onTodoChange: Function,
        onTodoRemove: Function,
    },
    methods: {
        addNewTodo: function () {
            this.$emit('on-new-todo-add', this.group, this.newTodo)
            this.newTodo = { name: '', done: false }
        },
        changeTodo: function(todo, done) {
            this.$emit('on-todo-change', this.group, todo, done)
        },
        removeTodo: function(todo) {
            this.$emit('on-todo-remove', this.group, todo)
        }
    },
}
</script>

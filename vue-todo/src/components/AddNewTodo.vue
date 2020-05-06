<template>
    <div class="todo-group__body">
        <h3>Dodaj karteczkę!</h3>
        <input type="text" placeholder="Nazwa" v-model="group.name" />
        <input
            type="text"
            placeholder="Do zrobienia!"
            v-for="(todo, i) in group.todos"
            v-model="todo.name"
            :key="i"
        />
        <input
            class="btn"
            type="button"
            value="Dodaj nową rzecz!"
            @click="addNewTodo"
        />
        <input class="btn" type="button" value="Dodaj!" @click="addGroup"/>
    </div>
</template>

<script>
export default {
    name: 'AddNewTodo',
    data: () => ({
        group: {
            name: '',
            todos: [],
        },
    }),
    methods: {
        addNewTodo: function () {
            this.group.todos.push({ name: '', done: false })
        },
        addGroup: function() {
            this.$emit('on-group-add', this.group)
            this.group = {
                name: '',
                todos: []
            }
        }
    },
    props: {
        onGroupAdd: Function
    }
}
</script>

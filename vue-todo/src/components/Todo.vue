<template>
    <div>
        <input type="checkbox" :checked="todo.done" @change="changeTodo" />
        <span
            :class="{
                done: todo.done,
            }"
            >{{ todo.name }}</span
        >
        <input class="remove" type="button" value="x" @click="removeTodo" />
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: {
        todo: Object,
        onTodoChange: Function,
        onTodoRemove: Function,
    },
    methods: {
        changeTodo: function () {
            this.$emit('on-todo-change', this.todo, !this.todo.done)
        },
        removeTodo: function () {
            this.$emit('on-todo-remove', this.todo)
        },
    },
}
</script>

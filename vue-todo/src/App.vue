<template>
    <div>
        <h1>Do zrobienia</h1>
        <div class="todo-group-wrapper">
            <TodoGroup
                v-for="group in groups"
                :group="group"
                :key="group.name"
                @on-new-todo-add="addNewTodo"
                @on-todo-change="changeTodo"
                @on-todo-remove="removeTodo"
            />
            <AddNewTodo @on-group-add="addGroup" />
        </div>
    </div>
</template>

<script>
import TodoGroup from './components/TodoGroup'
import AddNewTodo from './components/AddNewTodo'
export default {
    name: 'App',
    components: { AddNewTodo, TodoGroup },
    data: () => ({
        groups: [
            {
                name: 'Lista zakupów',
                todos: [
                    {
                        name: 'Mydło',
                        done: true,
                    },
                    {
                        name: 'Szampon',
                        done: false,
                    },
                ],
            },
            {
                name: 'Po szkole',
                todos: [
                    {
                        name: 'Lekcje',
                        done: true,
                    },
                    {
                        name: 'Sprzątanie',
                        done: false,
                    },
                ],
            },
        ],
    }),
    methods: {
        addGroup: function (group) {
            this.groups.push(group)
        },
        addNewTodo: function (group, todo) {
            this.groups = this.groups.map((gr) =>
                gr === group ? { ...gr, todos: [...gr.todos, todo] } : gr
            )
        },
        changeTodo: function (group, todo, done) {
            this.groups = this.groups.map((gr) =>
                gr === group
                    ? {
                          ...gr,
                          todos: gr.todos.map((td) =>
                              td === todo ? { ...td, done } : td
                          ),
                      }
                    : gr
            )
        },
        removeTodo: function (group, todo) {
            this.groups = this.groups.map((gr) =>
                gr === group
                    ? { ...gr, todos: gr.todos.filter((td) => td !== todo) }
                    : gr
            )
        },
    },
}
</script>

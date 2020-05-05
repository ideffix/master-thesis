<template>
    <div>
        <h1>Do zrobienia</h1>
        <div class="todo-group-wrapper">
            <TodoGroup v-for="group in groups" :group="group" :key="group.name"/>
            <AddNewTodo />
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
}
</script>

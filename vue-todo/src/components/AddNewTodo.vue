<template>
    <div class="todo-group__body">
        <h3>Dodaj karteczkę!</h3>
        <input type="text" placeholder="Nazwa" />
        <input type="text" placeholder="Do zrobienia!" />
        <input class="btn" type="button" value="Dodaj nową rzecz!" />
        <input class="btn" type="button" value="Dodaj!" />
    </div>
</template>

<script>
export default {
    name: 'AddNewTodo',
}
</script>

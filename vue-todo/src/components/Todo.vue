<template>
    <div>
        <input type="checkbox" :checked="todo.done" />
        <span
            :class="{
                done: todo.done,
            }"
            >{{ todo.name }}</span
        >
        <input class="remove" type="button" value="x" />
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: {
        todo: Object,
    },
}
</script>

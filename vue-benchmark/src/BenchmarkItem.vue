<template>
    <div @click="highlight = true" :class="{ highlight }" :id="obj.id">
        {{ obj.str }}
    </div>
</template>

<script>
export default {
    name: 'BenchmarkItem',
    data: () => ({
        highlight: false,
    }),
    props: {
        obj: Object,
    },
}
</script>

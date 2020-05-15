<template>
    <div>
        <div class="header">
            <input
                id="create"
                type="button"
                @click="onCreateClick"
                value="Stwórz 10.000 komponentów"
            />
            <input
                id="update"
                type="button"
                @click="onUpdateClick"
                value="Zaktualizuj 10.000 komponentów"
            />
            <input
                id="update10th"
                type="button"
                @click="onUpdate10thClick"
                value="Zaktualizuj co dziesiąty komponent"
            />
            <input
                id="swap"
                type="button"
                @click="onSwapClick"
                value="Zamień 2 komponenty"
            />
            <input
                id="clear"
                type="button"
                @click="onClearClick"
                value="Wyczyść komponenty"
            />
        </div>
        <div class="wrapper">
            <BenchmarkItem v-for="s in state" :obj="s" :key="s.id" />
            <div id="empty" v-if="state.length === 0">Pusty</div>
        </div>
    </div>
</template>

<script>
import BenchmarkItem from './BenchmarkItem'
const range = (num) => [...Array(num).keys()]

export default {
    name: 'App',
    components: { BenchmarkItem },
    data: () => ({
        state: [],
    }),
    methods: {
        onCreateClick: function () {
            this.state = range(10000).map((num) => ({
                id: num,
                str: String(num),
            }))
        },
        onUpdateClick: function () {
            this.state = this.state.map((s) => ({ ...s, str: s.str + '!' }))
        },
        onUpdate10thClick: function () {
            this.state = this.state.map((s) =>
                s.id % 10 === 0 ? { ...s, str: s.str + '!' } : s
            )
        },
        onSwapClick: function () {
            const first = this.state[2]
            const second = this.state[9997]
            this.state = this.state.map((s, i) => {
                if (i === 2) {
                    return second
                } else if (i === 9997) {
                    return first
                }
                return s
            })
        },
        onClearClick: function () {
            this.state = []
        },
    },
}
</script>

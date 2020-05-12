import { Component } from '@angular/core'

export interface Obj {
    id: number
    str: string
}

const range = (num) => [...Array(num).keys()]

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    state: Obj[] = []

    onCreateClick() {
        this.state = range(10_000).map((num) => ({ id: num, str: String(num) }))
    }

    onUpdateClick() {
        for (let i = 0; i < 10000; i++) {
            this.state[i].str += '!'
        }
    }

    onUpdate10thClick() {
        for (let i = 0; i < 10000; i += 10) {
            this.state[i].str += '!'
        }
    }

    onSwapClick() {
        const first = this.state[2]
        const second = this.state[9997]
        this.state[9997] = first
        this.state[2] = second
    }

    onClearClick() {
        this.state = []
    }
}

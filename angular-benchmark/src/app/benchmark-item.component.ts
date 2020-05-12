import { Component, Input } from '@angular/core'
import { Obj } from './app.component';

@Component({
    selector: 'benchmark-item',
    templateUrl: './benchmark-item.component.html',
})
export class BenchmarkItemComponent {
    highlight: boolean = false

    @Input()
    obj: Obj;

    onClick() {
        this.highlight = true
    }
}

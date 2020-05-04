import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Todo } from '../model'

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
})
export class TodoComponent {
    @Input()
    todo: Todo

    @Output()
    onRemove = new EventEmitter<Todo>()

    remove = () => this.onRemove.emit(this.todo)
}

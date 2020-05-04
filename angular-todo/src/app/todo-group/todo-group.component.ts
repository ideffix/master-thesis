import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Todo, TodoGroup } from '../model'

@Component({
    selector: 'todo-group',
    templateUrl: './todo-group.component.html',
})
export class TodoGroupComponent {
    newTodo: string

    @Input()
    group: TodoGroup

    @Output()
    onGroupRemove = new EventEmitter<TodoGroup>()

    removeTodo = (todo: Todo) =>
        (this.group.todos = this.group.todos.filter((el) => el !== todo))

    removeGroup = () => this.onGroupRemove.emit(this.group)

    addNewTodo = () => {
        this.group.todos.push({
            name: this.newTodo,
            done: false,
        })
        this.newTodo = ''
    }
}

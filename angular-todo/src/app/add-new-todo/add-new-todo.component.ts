import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { TodoGroup } from '../model'

@Component({
    selector: 'add-new-todo',
    templateUrl: './add-new-todo.component.html',
})
export class AddNewTodoComponent {
    group: TodoGroup = {
        todos: [],
        name: '',
    }

    @Output()
    onGroupAdd = new EventEmitter<TodoGroup>()

    addTodo = () =>
        this.group.todos.push({
            name: '',
            done: false,
        })

    addGroup = () => {
        this.onGroupAdd.emit(this.group)
        this.group = {
            todos: [],
            name: '',
        }
    }
}

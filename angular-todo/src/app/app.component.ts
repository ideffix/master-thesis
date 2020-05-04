import { Component } from '@angular/core'
import { TodoGroup } from './model'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    groups: TodoGroup[] = [
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
    ]

    removeGroup = (group: TodoGroup) =>
        (this.groups = this.groups.filter((el) => el !== group))

    addGroup = (group: TodoGroup) => this.groups.push(group)
}

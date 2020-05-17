import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { TodoGroupComponent } from './todo-group/todo-group.component'
import { AddNewTodoComponent } from './add-new-todo/add-new-todo.component'
import { TodoComponent } from './todo/todo.component'
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [
        AppComponent,
        TodoGroupComponent,
        AddNewTodoComponent,
        TodoComponent,
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

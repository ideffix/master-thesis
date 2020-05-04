export interface TodoGroup {
    name: string
    todos: Todo[]
}

export interface Todo {
    name: string
    done: boolean
}

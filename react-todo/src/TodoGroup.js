import React from "react";
import Todo from "./Todo";

const TodoGroup = ({name, todos}) => <div className={'todo-group'}>
    <h3>{name}</h3>
    {todos.map(todo => <Todo key={todo.name} {...todo}/>)}
</div>

export default TodoGroup;

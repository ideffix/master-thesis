import React from 'react'
import { Todo } from './Todo'

export const TodoGroup = ({ name, todos, groupIndex, onCheck }) => (
    <div className={'todo-group'}>
        <h3>{name}</h3>
        {todos.map((todo, i) => (
            <Todo
                key={todo.name}
                {...todo}
                onCheck={onCheck(groupIndex, i)}
                groupIndex={groupIndex}
                todoIndex={i}
            />
        ))}
    </div>
)

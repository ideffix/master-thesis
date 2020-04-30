import React, { useState } from 'react'
import { Todo } from './Todo'

export const TodoGroup = ({
    name,
    todos,
    groupIndex,
    onCheck,
    onRemove,
    onTodoRemove,
    onTodoAdd,
}) => {
    const [newTodo, setNewTodo] = useState('')
    const onNewTodoAdd = () => {
        onTodoAdd(newTodo)
        setNewTodo('')
    }
    return (
        <div className={'todo-group'}>
            <h3>{name}</h3>
            <input type={'button'} value={'Usuń'} onClick={onRemove} />
            {todos.map((todo, i) => (
                <Todo
                    key={todo.name}
                    {...todo}
                    onCheck={onCheck(groupIndex, i)}
                    onRemove={onTodoRemove(groupIndex, i)}
                    groupIndex={groupIndex}
                    todoIndex={i}
                />
            ))}
            <input
                type={'text'}
                placeholder={'Nowa rzecz'}
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <input
                type={'button'}
                value={'Dodaj nową rzecz!'}
                onClick={onNewTodoAdd}
            />
        </div>
    )
}

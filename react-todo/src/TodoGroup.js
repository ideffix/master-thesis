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
        <div>
            <div className={'todo-group__header'}>
                <span className={'pointer'} onClick={onRemove}>
                    X
                </span>
            </div>
            <div className={'todo-group__body'}>
                <h3>{name}</h3>
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
                    className={'btn'}
                    type={'button'}
                    value={'Dodaj nową rzecz!'}
                    onClick={onNewTodoAdd}
                />
            </div>
        </div>
    )
}

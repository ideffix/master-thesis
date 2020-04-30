import React, { useState } from 'react'

export const AddNewTodo = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [todos, setTodos] = useState([])
    const onNameChange = (e) => setName(e.target.value)
    const onTodoChange = (i) => (e) =>
        setTodos(
            todos.map((todo, index) => (i === index ? e.target.value : todo))
        )
    const onNewTodoAdd = () => setTodos([...todos, ''])
    const onGroupAdd = () => {
        onAdd({
            name,
            todos: todos.map(todo => ({
                name: todo,
                done: false
            }))
        });
        setTodos([]);
        setName("");
    }
    return (
        <div className={'todo-group__body'}>
            <h3>Dodaj karteczkę!</h3>
            <input type={'text'} value={name} onChange={onNameChange} placeholder={"Nazwa"}/>
            {todos.map((todo, i) => (
                <input
                    key={i}
                    type={'text'}
                    value={todos[i]}
                    placeholder={"Do zrobienia!"}
                    onChange={onTodoChange(i)}
                />
            ))}
            <input
                className={'btn'}
                type={'button'}
                value={'Dodaj nową rzecz!'}
                onClick={onNewTodoAdd}
            />
            <input
                className={'btn'}
                type={'button'}
                value={'Dodaj!'}
                onClick={onGroupAdd}
            />
        </div>
    )
}

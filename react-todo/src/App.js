import React from 'react'
import TodoGroup from "./TodoGroup";

const groups = [
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
                name: 'CS:GO',
                done: false,
            },
        ],
    },
]

const App = () => (
    <>
        <h1>Do zrobienia</h1>
        <div className={'todo-group-wrapper'}>
        {groups.map((group) => (
            <TodoGroup key={group.name} {...group} />
        ))}
        </div>
    </>
)

export default App

import React, { useState } from 'react'
import { TodoGroup } from './TodoGroup'
import { AddNewTodo } from './AddNewTodo'

const mock = [
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

export const App = () => {
    const [groups, setGroups] = useState(mock)
    const onCheck = (groupIndex, todoIndex) => (done) =>
        setGroups(
            groups.map((group, i) =>
                groupIndex === i
                    ? {
                          ...group,
                          todos: group.todos.map((todo, j) =>
                              todoIndex === j ? { ...todo, done } : todo
                          ),
                      }
                    : group
            )
        )
    const onTodoRemove = (groupIndex, todoIndex) => () =>
        setGroups(
            groups.map((group, i) =>
                groupIndex === i
                    ? {
                          ...group,
                          todos: group.todos.filter(
                              (todo, j) => todoIndex !== j
                          ),
                      }
                    : group
            )
        )
    const onTodoAdd = (groupIndex) => (todo) =>
        setGroups(
            groups.map((group, i) =>
                groupIndex === i
                    ? {
                          ...group,
                          todos: [
                              ...group.todos,
                              {
                                  name: todo,
                                  done: false,
                              },
                          ],
                      }
                    : group
            )
        )
    const onRemove = (groupIndex) => () =>
        setGroups(groups.filter((_, i) => groupIndex !== i))
    return (
        <>
            <h1>Do zrobienia</h1>
            <div className={'todo-group-wrapper'}>
                {groups.map((group, i) => (
                    <TodoGroup
                        key={group.name}
                        {...group}
                        onCheck={onCheck}
                        onTodoRemove={onTodoRemove}
                        onRemove={onRemove(i)}
                        onTodoAdd={onTodoAdd(i)}
                        groupIndex={i}
                    />
                ))}
                <AddNewTodo onAdd={(group) => setGroups([...groups, group])} />
            </div>
        </>
    )
}

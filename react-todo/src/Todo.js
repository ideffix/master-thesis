import React from 'react'

export const Todo = ({ name, done, onCheck }) => (
    <div>
        <input
            type={'checkbox'}
            checked={done}
            onChange={(e) => onCheck(e.target.checked)}
        />
        <span className={done ? 'done' : ''}>{name}</span>
    </div>
)

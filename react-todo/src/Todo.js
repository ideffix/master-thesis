import React from 'react'

export const Todo = ({ name, done, onCheck, onRemove }) => (
    <div>
        <input
            type={'checkbox'}
            checked={done}
            onChange={(e) => onCheck(e.target.checked)}
        />
        <span className={done ? 'done' : ''}>{name}</span>
        <input className={'remove'} type={'button'} value={'x'} onClick={onRemove}/>
    </div>
)

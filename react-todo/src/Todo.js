import React from "react";

const Todo = ({name, done}) => (
    <div>
        <input type={"checkbox"} checked={done}/><span>{name}</span>
    </div>
)

export default Todo;

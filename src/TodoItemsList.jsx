import React from 'react';

const TodoItemsList = (props) => {
    return  (
    <>
    <div className="todo_style">
    <i className="fa fa-times" aria-hidden="true"
        onClick={() => {
            props.onSelect(props.id);
        }}
    />
    <li> {props.text} </li>
    </div>
    </>)
}

export default TodoItemsList;   
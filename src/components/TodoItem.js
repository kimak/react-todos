import React from 'react';

const TodoItem = (props) => {

    let itemClass = "";
    if(props.complete) itemClass = "complete";

    return (<li className={itemClass} onClick={props.onClick}>{props.label}</li>);
}

export default TodoItem;

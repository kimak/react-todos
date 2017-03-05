import React, {PropTypes} from 'react';

const TodoItem = (props) => {

    let itemClass = "";
    if(props.complete) itemClass = "complete";

    return (<li className={itemClass} onClick={props.onClick}>{props.label}</li>);
}

TodoItem.propTypes = {
  label: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  onClick: PropTypes.func,
}

export default TodoItem;

import React, {PropTypes} from 'react';

const TodoFilter = (props) => {

  const allClass = (props.status==="none") ? "filterSelected" : "";
  const completeClass = (props.status==="complete") ? "filterSelected" : "";
  const todoClass = (props.status==="todo") ? "filterSelected" : "";

  return <div>
    <span>Filtres: </span>
    <button className={allClass} onClick={props.onSelectFilter.bind(this,"none")}>Tous</button>
    <button className={completeClass} onClick={props.onSelectFilter.bind(this,"complete")}>Terminé</button>
    <button className={todoClass} onClick={props.onSelectFilter.bind(this,"todo")}>A faire</button>
  </div>
}

TodoFilter.propTypes = {
  status: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
}

export default TodoFilter;

import React, { Component } from 'react';
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";

export default class Todo extends Component {

  constructor(props){
    super(props);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.selectFilter = this.selectFilter.bind(this);
    this.state = {
      todos: [
        {label: "Learn Javascript", complete: true},
        {label: "Learn ES6", complete: true},
        {label: "Learn React", complete: false},
        {label: "Learn React Native", complete: false},
        {label: "Learn Nodejs", complete: false},
        {label: "Learn by doing", complete: false},
        {label: "Learn to teach", complete: false},
        {label: "Teach to learn", complete: false},
      ],
      filter: "none",
      inputValue: "",
    }
  }

  onAddTodo(){
    const todos = this.state.todos;
    todos.push({
      label: this.state.inputValue
    });

    this.setState({
      todos,
      inputValue: "",
    });
  }

  onInputChange(event){
    this.setState({
      inputValue: event.target.value,
    });
  }

  toggleItem(index){
    const selectedTodo = this.state.todos[index];
    selectedTodo.complete=!selectedTodo.complete;
    this.setState({
      todos: this.state.todos,
    });
  }

  selectFilter(status){
    this.setState({
      filter: status,
    });
  }

  render() {

    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.onInputChange}/>
        <button onClick={this.onAddTodo}>Ajouter</button>
        <TodoList todos={this.state.todos} filter={this.state.filter} selectItem={this.toggleItem} />
        <TodoFilter status={this.state.filter} onSelectFilter={this.selectFilter} />
      </div>
    );
  }
}

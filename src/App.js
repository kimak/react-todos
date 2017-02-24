import React, { Component } from 'react';
import "./App.css";

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      complete: false,
    }
  }

  onClick(){
    this.setState({
      complete: !this.state.complete
    })
  }

  render (){

    let itemClass = "";
    if(this.state.complete) itemClass = "complete";

    return (<li className={itemClass} onClick={this.onClick}>{this.props.label}</li>);
  }
}

class TodoList extends Component {

  constructor(props){
    super(props);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      todos: [],
      inputValue: "",
    }
  }

  onAddTodo(){
    const todos = this.state.todos;
    todos.push(this.state.inputValue);

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

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.onInputChange}/>
        <button onClick={this.onAddTodo}>Ajouter</button>
        <ul>{
          this.state.todos.map((item, index)=>{
            return <TodoItem key={index} label={item} complete />
          })
        }</ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <TodoList />
    );
  }
}

export default App;

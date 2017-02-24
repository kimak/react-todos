import React, { Component } from 'react';

const todoData = ["Learn Javascript", "Learn ES6", "Learn React", "Learn React Native", "Learn Redux", "Learn Nodejs", "Learn to teach", "Teach to learn"];

const TodoItem = (props) => {
    return (<li>{props.label}</li>);
}

class TodoList extends Component {
  render() {
    return (
      <ul>{
        todoData.map((item, index)=>{
          return <TodoItem key={index} label={item} />
        })
      }</ul>
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

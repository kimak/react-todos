import React, { Component } from 'react';

const todoData = ["Learn Javascript", "Learn ES6", "Learn React", "Learn React Native", "Learn Redux", "Learn Nodejs", "Learn by doing","Learn to teach", "Teach to learn"];

const TodoItem = (props) => {

    const style = {textDecoration: "none"};
    if(props.complete) style.textDecoration = "line-through";

    return (<li style={style}>{props.label}</li>);
}

class TodoList extends Component {
  render() {
    return (
      <ul>{
        todoData.map((item, index)=>{
          return <TodoItem key={index} label={item} complete />
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

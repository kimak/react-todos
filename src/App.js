import React, { Component } from 'react';

const todoData = ["Learn Javascript", "Learn ES6", "Learn React", "Learn React Native", "Learn Redux", "Learn Nodejs", "Learn to teach", "Teach to learn"];

class TodoItem extends Component {
  render (){
    return (<li>{this.props.label}</li>);
  }
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

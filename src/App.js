import React, { Component } from 'react';
import "./App.css";

const todoData = ["Learn Javascript", "Learn ES6", "Learn React", "Learn React Native", "Learn Redux", "Learn Nodejs", "Learn by doing","Learn to teach", "Teach to learn"];

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      complete: false
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

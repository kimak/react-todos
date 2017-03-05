import React, { Component } from 'react';

export default class TodoItem extends Component {

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

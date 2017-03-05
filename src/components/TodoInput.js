import React, { Component, PropTypes } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      inputValue: "",
    }
  }

  onInputChange(event){
    this.setState({
      inputValue: event.target.value,
    });
  }

  onClickButton(){
    this.setState({
      inputValue: "",
    });
    this.props.onAddTodo(this.state.inputValue);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.onInputChange}/>
        <button onClick={this.onClickButton}>Ajouter</button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}


export default TodoInput;

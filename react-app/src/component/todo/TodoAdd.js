import React from "react";

export default class TodoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItem: '' }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleAddItem(e) {
    e.preventDefault();
    const item = this.state.todoItem;

    if(!item) {
      return;
    }

    this.setState({todoItem: ''});
    this.props.addTodoHandler(item);    
  }

  handleInputChange(e) {
    this.setState({todoItem: e.target.value});
  }

  render() {
    return (
      <div className="flex mb-4 items-center">
        <input
          type="text"
          value={this.state.todoItem}
          onChange={this.handleInputChange}
          className="w-full p-2 rounded text-slate-900"
        ></input>
        <button 
          onClick={this.handleAddItem}
          className="flex-no-shrink ml-4 p-2 border-2 rounded text-green-600 border-green-600 hover:text-slate-300 hover:bg-green-600">
          Add
        </button>
      </div>
    );
  }
}

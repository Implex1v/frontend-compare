import React from "react";
import TodoButtonDone from "./TodoButtonDone";
import TodoButtonUndo from "./TodoButtonUndo";
import TodoDeleteButton from "./TodoDeleteButton";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {item: this.props.item};
    this.handleDone = this.handleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDone(e) {
    const item = this.state.item;
    item.done = !item.done;
    this.setState({item: item});

    if(this.props.onItemDone) {
      this.props.onItemDone(this.props.item);
    }
  }

  handleDelete(e) {
    if(this.props.onItemDelete) {
      this.props.onItemDelete(this.state.item);
    }
  }

  render() {
    const strike = this.state.item.done ? ' text-green-600 line-through' : '';
    const button = this.state.item.done ?   
      <TodoButtonUndo onClick={this.handleDone} /> :
      <TodoButtonDone onClick={this.handleDone} /> ;

    return (
      <div className="flex mb-4 items-center">
        <div className="w-full">
          <div>
            <p className={"w-full"+strike}>{this.state.item.text}</p>
          </div>
          <div>
            <p className="text-xs text-slate-300">
              {this.state.item.formatCreated()}
            </p>
          </div>
        </div>
        {button}
        <TodoDeleteButton onClick={this.handleDelete} />
      </div>
    );
  }
}

export default Todo;

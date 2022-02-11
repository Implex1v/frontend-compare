import React from "react";
import TodoButtonDone from "./TodoButtonDone";
import TodoButtonUndo from "./TodoButtonUndo";
import TodoDeleteButton from "./TodoDeleteButton";
import { TodoItem } from "../../model/TodoItem";

interface TodoProps {
  onItemDone(item: TodoItem): void;

  onItemDelete(item: TodoItem): void;

  item: TodoItem;
}

export default class Todo extends React.Component<TodoProps> {
  constructor(props: TodoProps) {
    super(props);

    this.handleDone = this.handleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDone() {
    this.props.onItemDone(this.props.item);
  }

  handleDelete() {
    if (this.props.onItemDelete) {
      this.props.onItemDelete(this.props.item);
    }
  }

  render() {
    const strike = this.props.item.done ? " text-green-600 line-through" : "";
    const button = this.props.item.done ? (
      <TodoButtonUndo onClick={this.handleDone} />
    ) : (
      <TodoButtonDone onClick={this.handleDone} />
    );

    return (
      <div className="flex mb-4 items-center">
        <div className="w-full">
          <div>
            <p className={"w-full" + strike}>{this.props.item.text}</p>
          </div>
          <div>
            <p className="text-xs text-slate-300">{this.props.item.formatCreated()}</p>
          </div>
        </div>
        {button}
        <TodoDeleteButton onClick={this.handleDelete} />
      </div>
    );
  }
}

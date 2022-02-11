import React from 'react';
import ButtonDone from './ButtonDone';
import ButtonUndo from './ButtonUndo';
import DeleteButton from './DeleteButton';
import { Todo } from '../../model/Todo';

interface TodoProps {
  onItemDone(item: Todo): void;
  onItemDelete(item: Todo): void;
  item: Todo;
}

export default class TodoLine extends React.Component<TodoProps> {
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
    const strike = this.props.item.done ? ' text-green-600 line-through' : '';
    const button = this.props.item.done ? (
      <ButtonUndo onClick={this.handleDone} />
    ) : (
      <ButtonDone onClick={this.handleDone} />
    );

    return (
      <div className="flex mb-4 items-center">
        <div className="w-full">
          <div>
            <p className={'w-full' + strike}>{this.props.item.text}</p>
          </div>
          <div>
            <p className="text-xs text-slate-300">{this.props.item.formatCreated()}</p>
          </div>
        </div>
        {button}
        <DeleteButton onClick={this.handleDelete} />
      </div>
    );
  }
}

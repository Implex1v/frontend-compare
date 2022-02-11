import React from 'react';

interface TodoButtonUndoProps {
  onClick(): void;
}

export default class ButtonUndo extends React.Component<TodoButtonUndoProps> {
  props: TodoButtonUndoProps;

  constructor(props: TodoButtonUndoProps) {
    super(props);
    this.props = props;

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button
        onClick={this.handleOnClick}
        className="flex-no-shrink ml-4 p-2 border-2 rounded text-slate-500 border-slate-500 hover:text-slate-300 hover:bg-slate-500"
      >
        Undo
      </button>
    );
  }
}

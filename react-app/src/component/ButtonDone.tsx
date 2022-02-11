import React from 'react';

interface TodoButtonDoneProps {
  onClick(): void;
}

export default class ButtonDone extends React.Component<TodoButtonDoneProps> {
  props: TodoButtonDoneProps;

  constructor(props: TodoButtonDoneProps) {
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
        className="flex-no-shrink ml-4 p-2 border-2 rounded text-green-600 border-green-600 hover:text-slate-300 hover:bg-green-600"
      >
        Done
      </button>
    );
  }
}

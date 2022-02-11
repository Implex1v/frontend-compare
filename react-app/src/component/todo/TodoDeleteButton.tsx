import React from "react";

interface TodoDeleteButtonProps {
  onClick(): void
}

export default class TodoDeleteButton extends React.Component<TodoDeleteButtonProps> {
  props: TodoDeleteButtonProps;

  constructor(props: TodoDeleteButtonProps)  {
    super(props);
    this.props = props;

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.onClick()
  }

  render() {
      return (
        <button
            onClick={this.handleOnClick}
            className="flex-no-shrink ml-2 p-2 border-2 rounded text-red-600 border-red-600 hover:text-slate-300 hover:bg-red-600">
            Delete
        </button>
      );
  }
}
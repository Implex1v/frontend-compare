import React from "react";

export default class TodoDeleteButton extends React.Component {
  constructor(props)  {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    if(this.props.onClick) {
      this.props.onClick(e)
    }
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
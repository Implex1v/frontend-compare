import React from "react";

export default class TodoButtonDone extends React.Component {
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
            className="flex-no-shrink ml-4 p-2 border-2 rounded text-green-600 border-green-600 hover:text-slate-300 hover:bg-green-600">
            Done
        </button>
      );
  }
}
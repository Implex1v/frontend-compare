import React from "react";

export default class TodoButtonUndo extends React.Component {
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
            className="flex-no-shrink ml-4 p-2 border-2 rounded text-slate-500 border-slate-500 hover:text-slate-300 hover:bg-slate-500">
            Undo
        </button>
      );
  }
}
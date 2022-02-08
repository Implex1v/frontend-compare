import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div className="flex mb-4 items-center">
        <div className="w-full">
          <div>
            <p className="w-full">{this.props.item.text}</p>
          </div>
          <div>
            <p className="text-xs text-slate-300">
              {this.props.item.formatCreated()}
            </p>
          </div>
        </div>
        <button className="flex-no-shrink ml-4 p-2 border-2 rounded text-green-600 border-green-600 hover:text-slate-300 hover:bg-green-600">
          {this.props.item.done ? 'Undo' : 'Done'}
        </button>
        <button className="flex-no-shrink ml-2 p-2 border-2 rounded text-red-600 border-red-600 hover:text-slate-300 hover:bg-red-600">
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;

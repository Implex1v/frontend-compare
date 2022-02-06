import './App.css';
import React from "react"
import Todo from './todo/Todo'
import { TodoItem } from '../model/TodoItem'

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: new TodoItem("Foo", false),
    }
  }

  render() {
    return (
      <div className='container'>
        <h2>TODO App</h2>
        <p>Number of TODO: {this.state.todos.length}</p>
        <Todo item={this.state.todos} />
      </div>
    )
  }
}

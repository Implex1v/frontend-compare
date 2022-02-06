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
      <div className='container mx-auto bg-slate-700'>
        <div className='p-4 text-zinc-50 shadow'>
          <p className='text-4xl object-top font-bold'>TODO App</p>
          <div className='flex flex-row m-2 pt-3'>
            <div className='basis-3/4'>
              <Todo item={this.state.todos} />
            </div>
            <div className='basis-1/4'></div>
          </div>
        </div>
      </div>
    )
  }
}

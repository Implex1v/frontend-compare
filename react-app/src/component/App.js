import './App.css';
import React from "react"
import Todo from './todo/Todo'
import TodoAdd from './todo/TodoAdd'
import { TodoItem } from '../model/TodoItem'

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        new TodoItem("Foo", false), 
      ],
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleAddTodo(e) {
    const items = this.state.todos;
    items.push(new TodoItem(e, false));
    this.setState({todos: items});
  }

  handleItemDelete(e) {
    const items = this.state.todos.filter(item => item !== e);
    this.setState({todos: items});
  }

  render() {
    const items = this.state.todos.map((item) => 
      <Todo item={item} key={item.text + item.formatCreated()} onItemDelete={this.handleItemDelete} />
    );

    return (
      <div className='container mx-auto bg-slate-700 mt-8'>
        <div className='p-4 text-zinc-50 shadow'>
          <p className='text-4xl object-top font-bold pl-2'>TODO App</p>
          <div className='m-2 pt-3'>
            <div>
              <TodoAdd addTodoHandler={this.handleAddTodo} />
            </div>
            <div>
              {items}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

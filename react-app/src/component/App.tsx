import './App.css';
import React from 'react';
import TodoLine from './todo/TodoLine';
import TodoAdd from './todo/TodoAdd';
import { Todo } from '../model/Todo';

interface TodoAppState {
  todos: Todo[];
}

export default class TodoApp extends React.Component<any, TodoAppState> {
  constructor(props: any) {
    super(props);
    this.state = { todos: [] };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleItemDone = this.handleItemDone.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleAddTodo(text: string) {
    const items = this.state.todos;
    items.push(new Todo(text, false));
    this.setState({ todos: items });
  }

  handleItemDelete(itemToDelete: Todo) {
    const items = this.state.todos.filter((item) => item !== itemToDelete);
    this.setState({ todos: items });
  }

  handleItemDone(item: Todo) {
    const original = this.state.todos.find((candidate) => candidate === item);

    if (!original) {
      return;
    }

    original.done = !original.done;
    this.setState({ todos: this.state.todos });
  }

  render() {
    const items = this.state.todos.map((item) => (
      <TodoLine
        item={item}
        key={item.text + item.formatCreated()}
        onItemDelete={this.handleItemDelete}
        onItemDone={this.handleItemDone}
      />
    ));

    return (
      <div className="container mx-auto bg-slate-700 pt-4 pb-4 shadow">
        <div className="p-4 text-zinc-50">
          <p className="text-4xl object-top font-bold pl-2">TODO App</p>
          <div className="m-2 pt-3">
            <div>
              <TodoAdd addTodoHandler={this.handleAddTodo} />
            </div>
            <div>{items}</div>
          </div>
        </div>
      </div>
    );
  }
}

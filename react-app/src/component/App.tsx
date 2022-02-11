import React from 'react';
import TodoLine from './TodoLine';
import TodoAdd from './TodoAdd';
import { Todo } from '../model/Todo';
import { IStorage } from '../logic/Storage';

interface TodoAppProps {
  storage: IStorage;
}

interface TodoAppState {
  todos: Todo[];
}

export default class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    this.state = {
      todos: this.props.storage.load(),
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleItemDone = this.handleItemDone.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleAddTodo(text: string) {
    let items = this.state.todos;
    items.push(new Todo(text, false));
    items = this.props.storage.store(items);
    this.setState({ todos: items });
  }

  handleItemDelete(itemToDelete: Todo) {
    let items = this.state.todos.filter((item) => item !== itemToDelete);
    items = this.props.storage.store(items);
    this.setState({ todos: items });
  }

  handleItemDone(item: Todo) {
    const original = this.state.todos.find((candidate) => candidate === item);

    if (!original) {
      return;
    }

    original.done = !original.done;
    const items = this.props.storage.store(this.state.todos);
    this.setState({ todos: items });
  }

  render() {
    console.log(this.state.todos);

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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './component/App';
import { LocalStore } from './logic/Storage';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp storage={new LocalStore()} />
  </React.StrictMode>,
  document.getElementById('root')
);

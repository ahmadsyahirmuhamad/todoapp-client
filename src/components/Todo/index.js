import React, { Component } from 'react';
import TodoList from '../../components/TodoList';

class Todo extends Component {
  render() {
    return (
      <div>
        Todo
        <TodoList />
      </div>
    );
  }
}

export default Todo;

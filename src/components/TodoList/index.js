import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../actions/todoActions';


class TodoList extends Component {

  fetchTodos() {
    fetchTodos()
      .then((data) => {
        return this.props.dispatch(data)
      });
  }

  render() {
    const { todos } = this.props;
    const mapTodos = todos.map((todo, index) => <li key={index} >{todo.title}</li>)
    return (
      <div>
        <button onClick={() => this.fetchTodos()}>
          getTodos
        </button>
        <ul>
          { mapTodos }
        </ul>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList


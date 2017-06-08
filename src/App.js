import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Route';
import { connect } from 'react-redux';
import { fetchUser, setUserFirstName } from './actions/userActions';

import TodoList from './components/TodoList';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount(){
    fetchUser()
      .then((data) => {
        return this.props.dispatch(data)
      });
  }


  render() {
    const { user, todos } = this.props;


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Navigation />
        <h1>{user.first_name}</h1>

        <button onClick={() => this.props.dispatch(setUserFirstName("jon"))}>Click</button>

        <TodoList todos={todos}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    todos: state.todo.todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}


const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default VisibleApp

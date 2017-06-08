import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Route';
import { connect } from 'react-redux';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Navigation />
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

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import User from '../User';
import Todo from '../Todo';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">App</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/todo">Todo</Link></li>
          </ul>
          <Route path = "/user" component = {User} />
          <Route path = "/todo" component = {Todo} />
        </div>
      </Router>
    );
  }
}

export default Navigation;

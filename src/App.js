import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Route';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';

class App extends Component {

  componentWillMount(){
    fetchUser()
      .then((data) => {
        return this.props.dispatch(data)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Navigation />
        <h1>{this.props.user.first_name}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
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

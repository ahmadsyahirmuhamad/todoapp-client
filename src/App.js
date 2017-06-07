import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Route';

import { connect } from 'react-redux';

// where call to api live
import { fetchUser } from './actions/userActions';

class App extends Component {

  componentWillMount(){
    this.props.dispatch(fetchUser())
  }

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

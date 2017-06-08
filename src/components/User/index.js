import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, setUserFirstName } from '../../actions/userActions';

class User extends Component {

  componentWillMount(){
    fetchUser()
      .then((data) => {
        return this.props.dispatch(data)
      });
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        User
        <h1>{user.first_name}</h1>
        <button onClick={() => this.props.dispatch(setUserFirstName("jon"))}>Click</button>
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


const VisibleUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(User)


export default VisibleUser

import React, { Component } from 'react';
import AuthUserContext from './FirebaseAuthUserContext';
import withAuthorization from './FirebaseWithAuthorization';

const AccountAuth = () =>
  <AuthUserContext.Consumer>
  {authUser =>
    <h1>Account: {authUser.email}</h1>
  }
  </AuthUserContext.Consumer>

class Account extends Component {
  render() {
    return (
      <AccountAuth />
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state)
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Account);
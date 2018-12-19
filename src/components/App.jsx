import React, { Component } from 'react';
import { connect } from 'react-redux'
import AuthUserContext from './FirebaseAuthUserContext';
import withAuthorization from './FirebaseWithAuthorization';

const AppAuth = () =>
  <AuthUserContext.Consumer>
  {authUser =>
    <h1>Account: {authUser.email}</h1>
  }
  </AuthUserContext.Consumer>

class App extends Component {
  render() {
    return (
      <AppAuth />
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state)
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(App);
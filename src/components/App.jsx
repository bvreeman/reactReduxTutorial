import React from 'react';
import AuthUserContext from './FirebaseAuthUserContext';
import withAuthorization from './FirebaseWithAuthorization';

const App = () =>
  <AuthUserContext.Consumer>
  {authUser =>
    <h1>Account: {authUser.email}</h1>
  }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(App);
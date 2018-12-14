import React, { Component } from 'react';
import AuthUserContext from './FirebaseAuthUserContext';
import withAuthorization from './FirebaseWithAuthorization';

const App = () =>
    <AuthUserContext.Consumer>
    {authUser =>
        <div>App</div>
    }
    </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(App);
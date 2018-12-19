import React, { Component } from 'react'
// import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { firebase } from './firebase'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { logUser } from './actions'
import Account from './components/Account'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import HeaderNav from './components/HeaderNav'
import FirebaseWithAuthentication from './components/FirebaseWithAuthentication';

// import FirebaseAuthUserContext from '../FirebaseAuthUserContext';

import * as routes from './constants/routes';

const store = createStore(reducer);

firebase.auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed in or up', user);
    } else {
        console.log('user has signed out or still needs to sign in.')
    }
})

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <HeaderNav />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/account' component={Account} />
                            <Route path='/signin' component={SignIn} />
                            <Route path='/signup' component={SignUp} />
                        
                            <Route exact path={routes.HOME} component={() => <Home />} />
                            <Route exact path={routes.SIGN_IN} component={() => <SignIn />} />
                            <Route exact path={routes.SIGN_UP} component={() => <SignUp />} />
                            <Route exact path={routes.ACCOUNT} component={() => <Account />} />
                            {/* <Route exact path={routes.PASSWORD_FORGET} component={() => <FirebasePasswordForgetPage />} /> */}
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default FirebaseWithAuthentication(App);

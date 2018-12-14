import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase'

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import HeaderNav from './components/HeaderNav'
// import FirebaseAuthUserContext from '../FirebaseAuthUserContext';

import * as routes from './constants/routes';

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed in or up', user);
    } else {
        console.log('user has signed out or still needs to sign in.')
    }
})

ReactDom.render(
    <Router>
        <div className="App">
            <HeaderNav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/app' component={App} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
            
                <Route exact path={routes.HOME} component={() => <Home />} />
                <Route exact path={routes.SIGN_IN} component={() => <SignIn />} />
                <Route exact path={routes.SIGN_UP} component={() => <SignUp />} />
                <Route exact path={routes.APP} component={() => <App />} />
                {/* <Route exact path={routes.PASSWORD_FORGET} component={() => <FirebasePasswordForgetPage />} /> */}
            </Switch>
        </div>
    </Router>, document.getElementById('root')
)
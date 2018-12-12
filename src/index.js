import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'

ReactDom.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/app' component={App} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
        </Switch>
    </Router>, document.getElementById('root')
)
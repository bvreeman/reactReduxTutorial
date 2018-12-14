import React from "react";
import './HeaderNav.css';
import {Link} from 'react-router-dom';
import FirebaseAuthUserContext from './FirebaseAuthUserContext';
import SignOut from './SignOut'
import * as routes from '../constants/routes';


const HeaderNav = () => 
    <FirebaseAuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </FirebaseAuthUserContext.Consumer>

const NavigationAuth = () =>
    <div className="sticky headerContainer">
        <nav className="navbar">
            <div className="navbar-header">
                <div className="col-md-12 col-xs-12 navbarCenter">
                    <Link to="/Home" className="navbar-brand">Home</Link>
                    <Link to='/App' className="navbar-brand">App</Link>
                    <SignOut className='navbarRight' />
                </div>
            </div>
        </nav>
        <div><p>auth</p></div>
    </div>

const NavigationNonAuth = () =>
    <div className="sticky headerContainer">
        <nav className="navbar">
            <div className="navbar-header">
                <div className="col-md-12 col-xs-12 navbarCenter">
                    <Link to="/Home" className="navbar-brand">Home</Link>
                    <Link to={routes.SIGN_IN} className="navbar-brand">Sign In</Link>
                    <Link to={routes.SIGN_UP} className="navbar-brand navbarRight">Sign Up</Link>
                </div>
            </div>
        </nav>
        <div><p>non auth</p></div>
    </div>

export default HeaderNav;
import React from "react";
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
    <div><p>auth</p></div>
        <nav className="navbar">
            <div className="row navbar-header">
                {/* <div className='col-md-3 col-xs-12 navbarLeft'>
                    <Link to="/" className='navbarTitle'>Find A Consultant Now</Link>
                </div> */}
                <div className="col-md-9 col-xs-12 navbarCenter">
                    <Link to="/Home" className="navbar-brand">Home</Link>
                    <Link to='/App' className="navbar-brand">App</Link>
                    <a className="navbarRight socialItems fb-ic ml-0" rel="noopener noreferrer" href="https://www.facebook.com/mnvalleytransport/" target="_blank" style={{color: '#ffffff'}}><i className="fa fa-facebook white-text mr-lg-4"></i></a>
                    {/* <Link to={routes.ACCOUNT} className="navbar-brand">Account</Link> */}
                    <SignOut className='navbarRight' />
                </div>
            </div>
        </nav>
    </div>

const NavigationNonAuth = () =>
    <div className="sticky headerContainer">
        <div><p>non auth</p></div>
        <nav className="navbar">
            <div className="row navbar-header">
                {/* <div className='col-md-3 col-xs-12 navbarLeft'>
                    <Link to="/" className='navbarTitle'>Find A Consultant Now</Link>
                </div> */}
                <div className="col-md-6 col-xs-12 navbarCenter">
                    <Link to="/Home" className="navbar-brand">Home</Link>
                    <Link to={routes.SIGN_UP} className="navbar-brand">Sign Up</Link>
                    <Link to={routes.SIGN_IN} className="navbar-brand navbarRight">Sign In</Link>
                </div>
            </div>
        </nav>
    </div>

export default HeaderNav;
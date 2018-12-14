import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { SignUpLink } from './SignUp';


const SignIn = ({ history }) =>
    <div>
        <h1>Sign In</h1>
        <SignInForm history = {history} />
        <SignUpLink />
    </div>

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

class SignInForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = { ...INITIAL_STATE };

    }

    handleSignIn = () => {
        window.location.assign('/app');
      }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const { history } = this.props;
        
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                history.push(routes.HOME)
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            })
            .then (() => {
                this.handleSignIn();
            })
            event.preventDefault();
    }
    render () {
        const {
            email,
            password,
            error,
          } = this.state;
      
          const isInvalid =
            password === '' ||
            email === '';
      
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    value={email}
                    className='form-control'
                    placeholder='Email Address'
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    />
                <input 
                    type="password"
                    value={password}
                    className='form-control'
                    placeholder='Password'
                    onChange={event => this.setState(byPropKey('password', event.target.value))}

                />
                <button 
                    disabled={isInvalid}
                    className='btn btn-primary'
                    type='submit'
                >
                    Sign In
                </button>

                { error && <p>{error.message}</p> }
            </form>
        )
    }
}

export default withRouter(SignIn);

export { SignInForm }
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../firebase';
import * as routes from '../constants/routes';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn() {
        const { history } = this.props;
        
        console.log(this.state, 'this.state')
        const { email, password } = this.state;
        auth.signInWithEmailAndPassword(email, password)
            .then(
                history.push(routes.APP)
            )
            .catch(error => {
                this.setState({error})
            })
    }
    render () {
        return(
            <div className='form-inline'>
                <h2>Sign In</h2>
                <div className='form-group' style={{margin: '20px'}}>
                    <input 
                        type="text"
                        style={{marginRight: '5px'}}
                        className='form-control'
                        placeholder='Email'
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input 
                        type="password"
                        style={{marginRight: '5px'}}
                        className='form-control'
                        placeholder='Password'
                        onChange={event => this.setState({password: event.target.value})}

                    />
                    <button 
                        className='btn btn-primary'
                        type='button'
                        onClick={() => this.signIn()}
                    >
                        Sign In
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signup'}>Sign up instead</Link></div>
            </div>
        )
    }
}

export default SignIn;
import React, { Component } from 'react';
import { connect } from 'react-redux'
import AuthUserContext from './FirebaseAuthUserContext';
import withAuthorization from './FirebaseWithAuthorization';

const AccountAuth = () =>
  <AuthUserContext.Consumer>
  {authUser =>
    <div>
      <h1>Account: {authUser.email}</h1>
      {/* {console.log()} */}
      <div className='form-inline'>
        <div className='form-group'>
          <input type="text"
            placeholder='Facebook'
            className='form-control'
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title: event.target.value})}
          />
          <button
            className='btn btn-success'
            type='button'
          >
            Submit
          </button>
        </div>
      </div>
    </div>

  }
  </AuthUserContext.Consumer>

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  render() {
    return (
      <AccountAuth />
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(connect(mapStateToProps, null)(Account));
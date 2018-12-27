import React, { Component } from 'react';
import { connect } from 'react-redux'
import AuthUserContext from './FirebaseAuthUserContext';
import withAuthorization from './FirebaseWithAuthorization';
import { db } from '../firebase'
import 'firebase/database'
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facebook: ''
    }
  }

  addInfo = () => {
    console.log('this.state', this.state)
    this.databasePush()
  }

  databasePush = (props) => {
    //Adding a piece tied to their login to the folder will allow for them to have
    // a unique folder for just them.
    // console.log('props', this.props)
    let userInfo = db.ref(`users/${this.props.passingID}/Info`)
    // console.log(this.state.imageURL)
    
    // let updates = {
    //     facebook: this.state.facebook,
    // }
    userInfo.push();
}

  render() {
    return (
      <AuthUserContext.Consumer>
      {authUser =>
        <div>
          <h1>Account: {authUser.email}</h1>
          {/* {console.log()} */}
          <div className='form-inline'>
            <div className='form-group'>
              <input type="text"
                placeholder='Facebook page'
                className='form-control'
                style={{marginRight: '5px'}}
                onChange={event => this.setState({facebook: event.target.value})}
              />
              <button
                className='btn btn-success'
                type='button'
                onClick={() => this.addInfo()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
    
      }
      </AuthUserContext.Consumer>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(connect(mapStateToProps, null)(Account));
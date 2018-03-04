import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import StorageClient from './StorageClient'

import api from'./api'

function mapStatetoProps(state) {
  return ({
    user: state.user
  })
}
function mapDispatchToProps(dispatch){
  return {
    checkingSession: (authToken)=>{
      dispatch({
        type:'CHECKING_SESSION',
        authToken:authToken,
      })
    },
    checkingSessionSuccess:(authToken)=>{
      dispatch({
        type:'SESSION_CHECKED_SUCCESS',
        authToken:authToken
      })
    },
    checkingSessionFailed:(errors)=>{
      dispatch({
        type:'CHECKING_SESSION_ERROR',
        errors:errors
      })
    }
  }
}

class NewSession extends Component{

  constructor(props){
    super(props)
    this.isChecking = true
    this.checkAuthToken()

  }

  checkAuthToken(){
    let authToken= StorageClient.getAuthToken()
    this.props.checkingSession(authToken)
    api.authenticateAuthToken(authToken)
      .then(response=>{
        this.isChecking = false
        if(response.status==200){
          this.props.checkingSessionSuccess(authToken)
        } else {
          //delete from session storage
          this.props.checkingSessionFailed("failed")
          StorageClient.deleteAuthToken()
        }

      })
  }
  render(){
    if (this.isChecking){
      return <p>checking...</p>
    }
    return(
      this.props.user.loggedIn ? (
          <Redirect to="/Home"/>
        ) : (
          <Redirect to="/Login"/>
        )
    )
  }

}

export default connect(mapStatetoProps,mapDispatchToProps)(NewSession);

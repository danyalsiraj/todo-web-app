import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import StorageClient from './StorageClient'

import {connect} from 'react-redux'
import api from'./api'
function mapStatetoProps(state) {
  return ({
    authToken:state.user.authToken,
    loggedIn:state.user.loggedIn
  })
}
function mapDispatchToProps(dispatch){
  return {
    logout: (authToken)=>{
      dispatch({
        type:'LOGING_OUT',
        authToken:authToken,
      })
    },
    logoutOutSuccess:()=>{
      dispatch({
        type:'LOGGED_OUT',
      })
    },
    logoutDenied:(errors)=>{
      dispatch({
        type:'LOGOUT_ERROR',
        errors:errors
      })
    }
  }
}

class Logout extends Component{
  componentDidMount(){
    this.logout()
  }
  logout(){
    console.log("asdas logging out");
    let authToken= this.props.authToken
    this.props.logout(authToken)
    api.logout(authToken)
      .then(response=>{
        if(response.status==200){
          StorageClient.deleteAuthToken()
          this.props.logoutOutSuccess()

        } else {
          this.props.logoutDenied(['Unable to logout'])
        }
      })
  }

  render(){
    let loggedIn = this.props.loggedIn
    return(
      !loggedIn ? (
          <Redirect to="/Login"/>
        ) : (
          <p>LOGGING OUT ... </p>
        )
    )
  }
}

export default connect(mapStatetoProps,mapDispatchToProps)(Logout);

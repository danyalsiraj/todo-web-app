import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import StorageClient from './StorageClient'

import {connect} from 'react-redux'
import api from'./api'
function mapStatetoProps(state) {
  return ({
    user: state.user
  })
}
function mapDispatchToProps(dispatch){
  return {
    login: (email,password)=>{
      dispatch({
        type:'FETCHING_USER',
        email: email,
        password:password
      })
    },
    loggedInSuccess:(authToken)=>{
      dispatch({
        type:'FETCHED_USER',
        authToken: authToken
      })
    },
    loginDenied:(errors)=>{
      dispatch({
        type:'FETCHING_USER_ERROR',
        errors:errors
      })
    },
    resetUser:()=>{
      dispatch({
        type:'RESET_USER'
      })
    }
  }
}



class Login extends Component{
  componentWillMount(){
    this.props.resetUser()
  }
  login(e){
    e.preventDefault()
    let email= document.getElementById('email').value
    let password=document.getElementById('password').value
    console.log(email);
    this.props.login(email,password)
    api.login(email,password)
      .then(response=>{
        if(response.status==200){
          this.props.loggedInSuccess(response.headers.get('X-Auth'))
          StorageClient.saveAuthToken(response.headers.get('X-Auth'),document.getElementById('rememberMe').checked)
          this.props.history.push('/Home')
        } else {
          this.props.loginDenied(['Wrong username or password'])
        }
      })
  }
  render(){

    let hasError= this.props.user.errors.length>0
    return(
      <form  className="needs-validation" onSubmit={this.login.bind(this)} style={{width:'300px', margin: '1em auto'}}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className={hasError ? "form-control is-invalid" : "form-control is-valid"} id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className={hasError ? "form-control is-invalid" : "form-control is-valid"} id="password" placeholder="Password"/>
          <div className="invalid-feedback">
            Please provide a valid email and Password.
          </div>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe"/>
          <label className="form-check-label" for="rememberMe">Remember Me</label>
        </div>
        <input type="submit" className="btn btn-primary btn-sm btn-block" value="Login"/>
        <Link to="/SignUp" className="btn btn-outline-dark btn-sm btn-block">Sign-Up</Link>
      </form>
    )
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Login);

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import api from'./api'

function mapStatetoProps(state) {
  return ({
    email: state.email,
    password:state.password,
    passwordConfirmation: state.passwordConfirmation
  })
}
function mapDispatchToProps(dispatch){
  return {
    signUp:(email,password)=>{
      dispatch({
        type:'SIGNING_UP',
        email:email,
        password:password
      })
    },
    signUpSuccessful:()=>{
      dispatch({
        type:'SIGNED_UP'
      })
    },
    signUpFailed:(error)=>{
      dispatch({
        type:'SIGN_UP_ERRORS',
        errors:error
      })
    }
}
}
class SignUp extends Component{
  signUp(e){
    e.preventDefault()
    let email= document.getElementById('email').value
    let password=document.getElementById('password').value
    let passwordCon=document.getElementById('passwordCon').value

    this.props.signUp(email,password)
    if(password==passwordCon){
      api.signUp(email,password)
        .then(response=>{
          if(response.status==200){
            this.props.signUpSuccessful()
            this.props.history.push('/')
          }else{
            this.props.signUpFailed(['unable to signup'])
          }
        })
    }else{
      this.props.signUpFailed(['Passwords do not match'])
    }
  }


  render(){
    return(
      <form  onSubmit={this.signUp.bind(this)} style={{width:'300px', margin: '1em auto'}}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="passwordCon" placeholder="Password"/>
        </div>
        <input type="submit" class="btn btn-primary btn-sm btn-block" value="Sign Up !!!"/>
      </form>
    )
  }



}

export default connect(mapStatetoProps,mapDispatchToProps)(SignUp);

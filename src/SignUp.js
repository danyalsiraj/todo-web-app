import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import api from'./api'

function mapStatetoProps(state) {
  return ({
    user: state.user,
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
    if(password==passwordCon && password.length>=6){
      api.signUp(email,password)
        .then(response=>{
          if(response.status==200){
            this.props.signUpSuccessful()
            this.props.history.push('/')
          }else{
            response.json().then(body=>{
                this.props.signUpFailed([body.errmsg])
            })
          }
        })
    }else{
      if (password.length>=6){
          this.props.signUpFailed(['PASSWORD_MISMATCH'])
      }else{
        this.props.signUpFailed(['PASSWORD_LENGTH'])
      }

    }
  }

  render(){
    let err=this.props.user.errors[0] || ''
    let emailTaken= err.match(/email.*dup.*key/i) ? true: false
    let passMismatch= err==='PASSWORD_MISMATCH' ? true :false
    let passLength= err==='PASSWORD_LENGTH' ? true :false

    return(
      <form  className="needs-validation" onSubmit={this.signUp.bind(this)} style={{width:'300px', margin: '1em auto'}}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className={emailTaken ? "form-control is-invalid" : "form-control is-valid"} id="email" aria-describedby="emailHelp" placeholder="Enter Email"/>
          <div className="invalid-feedback">
            Email already in use
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className={passLength ? "form-control is-invalid" : "form-control is-valid"} id="password" placeholder="Enter Password" required/>
          <div className="invalid-feedback">
            Password Must be 6 Characters
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password Confirmation</label>
          <input type="password" className={passMismatch ? "form-control is-invalid" : "form-control is-valid"} id="passwordCon" placeholder="Re-Enter Password" required/>
          <div className="invalid-feedback">
            Password Mismatch
          </div>
        </div>
        <input type="submit" class="btn btn-primary btn-sm btn-block" value="Sign Up !!!"/>
      </form>
    )
  }



}

export default connect(mapStatetoProps,mapDispatchToProps)(SignUp);

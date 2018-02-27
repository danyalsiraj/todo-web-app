import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class SignUp extends Component{

  render(){
    return(

      <form  style={{width:'300px', margin: '1em auto'}}>
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

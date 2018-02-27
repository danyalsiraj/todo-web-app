import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Login extends Component{

  render(){
    return(
      // <div className="container">
      //   <div className="login-container">
      //   <div id="output"></div>
      //     <div className="avatar"></div>
      //     <div className="form-box">
      //         <form action="" method="">
      //             <input name="user" type="text" placeholder="username"/>
      //             <input type="password" placeholder="password"/>
      //             <button className="btn btn-info btn-block login" type="submit">Login</button>
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      <form  style={{width:'300px', margin: '1em auto'}}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password"/>
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

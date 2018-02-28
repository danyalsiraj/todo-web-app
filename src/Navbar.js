import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Navbar extends Component{

  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" class="navbar-brand"><i class="fas fa-home"></i> MY PLANNER</Link>
         <Link to="/AddNewTodo" class="btn btn-outline-light"><i class="fas fa-plus"></i> ADD</Link>

        <ul class="navbar-nav ml-md-auto">
           <li class="nav-item">
           <Link to="/AddNewTodo" class="nav-link"><i class="fas fa-power-off"></i></Link>
           </li>
        </ul>

      </nav>

    )
  }



}

import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class Navbar extends Component{

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/Home" className="navbar-brand"><i className="fas fa-home"></i> MY PLANNER</Link>
         <Link to="/AddNewTodo" className="btn btn-outline-light"><i className="fas fa-plus"></i> ADD</Link>

        <ul className="navbar-nav ml-md-auto">
           <li className="nav-item">
           <button type="submit" class="btn btn-outline-light"><i className="fas fa-power-off"></i></button>

           </li>
        </ul>

      </nav>

    )
  }



}

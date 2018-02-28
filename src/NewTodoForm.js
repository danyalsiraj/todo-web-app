import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
export default class NewTodoForm extends Component{

  render(){
    return(
      <div>
        <Navbar/>
        <form  style={{width:'300px', margin: '1em auto'}}>
          <div className="form-group">
            <label for="exampleInputEmail1">ADD TODO</label>
            <input type="text" className="form-control" id="newTodo" placeholder="Enter ToDo"/>
          </div>
          <input type="submit" className="btn btn-primary btn-sm btn-block" value="ADD"/>
          <Link to="/" className="btn btn-outline-dark btn-sm btn-block">Cancel</Link>
        </form>
      </div>

    )
  }



}

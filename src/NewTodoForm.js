import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

import {connect} from 'react-redux'
import api from'./api'
function mapStatetoProps(state) {
  return ({
    todo: state.todo,
    authToken:state.user.authToken
  })
}
function mapDispatchToProps(dispatch){
  return {
    addTodo:(task)=>{
      dispatch({
        type:'ADDING_TODO',
        task:task
      })
    },
    addTodoSuccess:(task)=>{
      dispatch({
        type:'ADDED_TODO',
        task:task.text,
        id:task._id
      })
    },
    addingTodoErrors:(errors)=>{
      dispatch({
        type:'ADDING_TODO_ERRORS',
        errors: errors
      })
    },
  }
}
class NewTodoForm extends Component{

  addNewTodo(e){
    e.preventDefault()
    let newTodo=document.getElementById('newTodo').value
    this.props.addTodo(newTodo)
    api.addTodo(newTodo,this.props.authToken)
      .then(body=>{
        if(body && body.todo){
          this.props.addTodoSuccess(body.todo)
          this.props.history.push('/Home')
        }else{
          this.props.addingTodoErrors('unable to add todo');
        }
      })

  }
  render(){
    return(
      <div>
        <Navbar/>
        <form  onSubmit={this.addNewTodo.bind(this)} style={{width:'300px', margin: '1em auto'}}>
          <div className="form-group">
            <label for="exampleInputEmail1">ADD TODO</label>
            <input type="text" className="form-control" id="newTodo" placeholder="Enter New Task"/>
          </div>
          <input type="submit" className="btn btn-primary btn-sm btn-block" value="ADD"/>
          <Link to="/" className="btn btn-outline-dark btn-sm btn-block">Cancel</Link>
        </form>
      </div>

    )
  }



}
export default connect(mapStatetoProps,mapDispatchToProps)(NewTodoForm);

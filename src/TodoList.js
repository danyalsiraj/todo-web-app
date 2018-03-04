import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoCard from './TodoCard'
import './TodoList.css'
import Navbar from './Navbar'

import {connect} from 'react-redux'
import api from'./api'
function mapStatetoProps(state) {
  return ({
    todos: state.todos.todos,
    authToken:state.user.authToken
  })
}
function mapDispatchToProps(dispatch){
  return {
    fetchTodos:()=>{
      dispatch({
        type:'FETCHING_TODOS'
      })
    },
    fetchTodoSuccess:(todos)=>{
      dispatch({
        type:'FETCHED_TODOS',
        todos: todos
      })
    },
    fetchTodosErrors:(errors)=>{
      dispatch({
        type:'FETCHING_TODOS_ERRORS',
        errors: errors
      })
    },
    addTodo: (todo)=>{
      dispatch({
        type:'ADD_TODO',
        todo: todo
      })
    },
    deleteTodo: (todo)=>{
      dispatch({
        type:'DELETING_TODO',
        id :todo.id
      })
    },
    deleteTodoSuccess:()=>{
      dispatch({
        type:'DELETED_TODO'
      })
    },
    deleTodoError: (error)=>{
      dispatch({
        type:'DELETING_TODO_ERROR',
        errors: error
      })
    }
  }
}

class TodoList extends Component{
  componentDidMount(){
    this.getTodos()
  }
  getTodos(){
    if (!this.props.todos.isFetching){
      this.props.fetchTodos()
      api.getTodos(this.props.authToken)
        .then(body=>{
          if(body && body.todos){
            let todos = body.todos.map(todo=>{
              return {id:todo._id, task:todo.text}
            })
            this.props.fetchTodoSuccess(todos)
          }else{
            this.props.fetchTodosErrors(['Unable to get Todos'])
          }
        })
    }
  }

  deleteTodo(id,task){
    //apirequest here
    //throw "DELETE TODO IS UNIMPLEMENTED"

    this.props.deleteTodo(task)
    api.deleteTodo(id,this.props.authToken)
      .then(response=>{
        if(response.status==200){
          this.props.deleteTodoSuccess()
          this.getTodos();
        }else{
          this.props.deleTodoError('unable to delete')
        }
      })
  }
  render (){
    console.log(this.props);
    const todos=this.props.todos.map((todo)=>(
      <TodoCard key={todo.id} deleteTodo={this.deleteTodo.bind(this)} {...todo}/>
    ))
    return (
      <div >
        <Navbar/>
        <div className="todolist app">
          {todos}
        </div>
      </div>
    )
  }

  static propTypes={
    todos:PropTypes.arrayOf(PropTypes.object).isRequired

  }

}
export default connect(mapStatetoProps,mapDispatchToProps)(TodoList);

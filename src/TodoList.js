import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoCard from './TodoCard'
import './TodoList.css'
import Navbar from './Navbar'


export default class TodoList extends Component{
  deleteTodo(id){
    //apirequest here
    throw "DELETE TODO IS UNIMPLEMENTED"
  }
  render (){
    const todos=this.props.todos.map((todo)=>(
      <TodoCard key={todo.id} deleteTodo={this.deleteTodo.bind(this)} {...todo}/>
    ))
    return (
      <div>
        <Navbar/>

        <div className="todolist">
          {todos}
        </div>
      </div>
    )
  }

  static propTypes={
    todos:PropTypes.arrayOf(PropTypes.object).isRequired

  }

}

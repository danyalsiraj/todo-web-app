import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './TodoList.css'

export default class todo extends Component{

  deleteTodo(){
    this.props.deleteTodo(this.props.id,this.props.task)
  }
  render(){
    return (
      <div className="card">
        <p>{this.props.task}</p>
        <button type="button" class="btn btn-light" onClick={this.deleteTodo.bind(this)}><i class="far fa-trash-alt"></i></button>
      </div>
    )
  }
  static propTypes={
    id: PropTypes.string.isRequired,
    task:PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
}

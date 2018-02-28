import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class todo extends Component{

  deleteTodo(){
    this.props.deleteTodo(this.props.id)
  }
  render(){
    return (
      <div className="card">
        <p style>{this.props.todo.task}</p>
        <button type="button" class="btn btn-outline-dark btn-sm" onClick={this.deleteTodo.bind(this)}>DONE</button>
      </div>
    )
  }
  static propTypes={
    id: PropTypes.string.isRequired,
    todo:PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
}

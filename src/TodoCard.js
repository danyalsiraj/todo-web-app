import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class todo extends Component{

  deleteTodo(){
    this.props.deleteTodo(this.props.id,this.props.task)
  }
  render(){
    return (
      <div className="card">
        <p>{this.props.task}</p>
        <button type="button" className="btn btn-outline-dark btn-sm" onClick={this.deleteTodo.bind(this)}>DONE</button>
      </div>
    )
  }
  static propTypes={
    id: PropTypes.string.isRequired,
    task:PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
}

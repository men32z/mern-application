import React, {Component} from 'react';
import {Link}from 'react-router-dom';
import axios from 'axios';

export default class Todos extends Component{
  constructor(props){
    super(props);
    this.deleteTodo= this.deleteTodo.bind(this);
  }
  deleteTodo(){
    axios.delete('http://127.0.0.1:4000/todos/delete/'+this.props.todo._id)
    .then((res)=>{
      console.log(res.data);
      this.props.removeHandler(this.props.todo._id);
    });
  }
  render(){
    return (
      <tr className={this.props.todo.todo_completed?'completed':''}>
        <td>{this.props.todo.todo_description}</td>
        <td>{this.props.todo.todo_responsible}</td>
        <td>{this.props.todo.todo_priority}</td>
        <td>
          <Link to={"/edit/"+this.props.todo._id} className="btn btn-info" >Edit</Link>&nbsp;&nbsp;&nbsp;
          <button className="btn btn-danger" onClick={this.deleteTodo}>Delete</button>
        </td>
      </tr>
    )
  }
}

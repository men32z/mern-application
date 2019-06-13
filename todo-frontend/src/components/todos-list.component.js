import React, {Component} from 'react';
import {Link}from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/"+props.todo._id} >Edit</Link>/
      <Link to={"/delete/"+props.todo._id} >Delete</Link>
    </td>
  </tr>
)


export default class TodosList extends Component{
  constructor(props){
    super(props);
    this.state = {todos:[]};
  }

  getTodos(){
    axios.get('http://127.0.0.1:4000/todos').then((res)=>{
      this.setState({todos: res.data});
    }).catch((err)=>{
      console.log(err);
    });
  }

  todoList(){
    return this.state.todos.map(function(currentTodo, i){
      return <Todo todo={currentTodo} key={i} />
    });
  }

  componentDidMount(){
    this.getTodos();
  }
  render(){
    return(
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped my-2">
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
          </tbody>
        </table>
      </div>
    )
  }
}

import React, {Component} from 'react';
import axios from 'axios';
import Todo from './item-list';

export default class TodosList extends Component{
  constructor(props){
    super(props);
    this.state = {todos:[]};
    this.removeHandler = this.removeHandler.bind(this);

  }

  getTodos(){
    axios.get('http://127.0.0.1:4000/todos').then((res)=>{
      this.setState({todos: res.data});
    }).catch((err)=>{
      console.log(err);
    });
  }

  todoList(){
    return this.state.todos.map((currentTodo, i)=>{
      return <Todo todo={currentTodo} key={i} removeHandler={this.removeHandler} />
    });
  }

  removeHandler(id) {
   this.setState({todos: this.state.todos.filter(x=>x._id!==id)});
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

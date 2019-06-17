import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/todo/create";
import TodosList from "./components/todo/list";
import EditTodo from "./components/todo/edit";
import ReduxExample from "./components/redux-example";

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/men32z/mern-application" target="_blank" rel="noopener noreferrer">
              <img src="/images/logo.png" className="img-fluid" style={{maxHeight:50,}} alt=""></img>
            </a>
            <Link to="/" className="navbar-brand">Mern-Stack Todo App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/redux-example" className="nav-link">Redux Example</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/redux-example" component={()=><ReduxExample aRandomProp="whatever"/>}  />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login'
import SignUp from './SignUp'
import NewTodoForm from './NewTodoForm'
import Todolist from './TodoList'
import {Provider} from 'react-redux'
import store from './Reducer'
import './App.css';
import Navbar from './Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {

  login(){

  }
  render() {
    let isLoggedIn = true
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
              <Route path="/SignUp" component={SignUp}/>
              <Route path="/AddNewTodo" component={NewTodoForm}/>
              <Route path="/Home" component={Todolist}/>
            <Route path="/" component={Login}/>
          </Switch>
        </BrowserRouter>

      </Provider>


    );
  }
}

export default App;

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
import Logout from './Logout'
import NewSession from './NewSession'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {

  login(){

  }
  renderComponent(Component) {

    return (props) => {
      let isLoggedIn = store.getState().user.loggedIn
      console.log("Is logged in:", isLoggedIn)
      return isLoggedIn ? (
          <Component {...props}/>
        ) : (
         <Redirect to="/"/>
        )
    }
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
                <Route path="/AddNewTodo" render={this.renderComponent(NewTodoForm)}/>
                <Route path="/Home" render={this.renderComponent(Todolist)}/>
                <Route path="/Logout" component={Logout}/>
                <Route path="/SignUp" component={SignUp}/>
                <Route path="/Login" component={Login}/>
                <Route path="/" component={NewSession}/>

          </Switch>
        </BrowserRouter>

      </Provider>


    );
  }
}

export default App;

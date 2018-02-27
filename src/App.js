import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login'
import SignUp from './SignUp'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/" component={Login}/>
        </Switch>

      </BrowserRouter>

    );
  }
}

export default App;

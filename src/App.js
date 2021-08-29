import Login from "./login"
import Signup from "./Signup"
import React, { Component } from 'react';
import Main from "./main.js";
import {BrowserRouter as Router,Route } from "react-router-dom";
class App extends Component{
  constructor(p)
  {
    super(p);
  }
  render()
  {
    return(
    <Router>
    <div className="App">
    <Route path="/" exact component={Main} />
    <Route path="/register" exact component={Main} />
    </div>
    </Router>
    );
  }
}

export default App;

import Login from "./login"
import Signup from "./Signup"
import Landing from "./landing.js";
import React, { Component } from 'react';
class Main extends Component{
  constructor(p)
  {
    super(p);
    this.state={
      l:true,
      p:true,
      st:[],
    };
  }
  render()
  {
    return(
    <div className="Main">
      {this.state.p?<>
      {this.state.l?<Login fun={this}></Login>:
      <Signup fun={this}></Signup>}</>:<Landing></Landing>
  }
    </div>
    );
  }
}
export default Main;
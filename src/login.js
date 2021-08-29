import "./login.css";
import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
    constructor(p)
    {
        super(p);
        this.change=this.change.bind(this);
        this.login=this.login.bind(this);
        this.c=this.c.bind(this);
        this.state={
            err:""
        }
    }
    c()
    {
        this.setState({
            regn:document.getElementById("rnl").value,
            pas:document.getElementById("password1").value
        });
    }
    login()
    {
        axios.get('http://localhost:5000/students/'+this.state.regn)
        .then(res =>this.setState({std:res.data}))
        .then(re=>{
            if(this.state.std.password==this.state.pas)
            this.props.fun.setState({p:false,st:this.state.std});
            else
            this.setState({err:"Invalid Password"});
        })
        .catch(err=>this.setState({err:"You have registered"}));
    }
     change()
    {
       this.props.fun.setState({l:false});
    }
    render(){
  return (
      <div  className="form">
          <div className="login-page">
        <form className="login-form">
            <input type="text" placeholder="Roll Number" name="rn" id="rnl" onChange={this.c}/>
            <input type="password" placeholder="password" name="password" id="password1" onChange={this.c}/>
            <input type="button" onClick={this.login}  name="submit" value="Login" className="submit"></input>
            <p className="error2"style={{color:"red"}}>{this.state.err}</p>
            <p className="message">Not registered? <button type="button" onClick={this.change}>Create an account</button></p>
        </form>
    </div>
    </div>
  );
    }
}

export default Login;

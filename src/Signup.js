import "./login.css";
import React, { Component } from 'react';
import axios from 'axios';
class Signup extends Component{
    constructor(p)
    {
        super(p);
        this.change=this.change.bind(this);
        this.Signup=this.Signup.bind(this);
        this.c=this.c.bind(this);
        this.state={
            err:"",
            name:"",
            regn:"",
            pas:"",
            cpas:""
        }
    }
    c()
    {
        this.setState({
            name:document.getElementById("name").value,
            regn:document.getElementById("rn").value,
            pas:document.getElementById("password").value,
            cpas:document.getElementById("confirmPassword").value
        });
    }
   
    change()
    {
       this.props.fun.setState({l:true});
    }
    Signup(e)
    {
        e.preventDefault();
        if(this.state.pas!=this.state.cpas)
        {
            this.setState({err:"Confirm password and password must be same"});
            return;
        }
        const obj={
            "name":this.state.name,
            "roll":this.state.regn,
            "pas":this.state.pas
        }
        axios.post('http://localhost:5000/students/add', obj)
      .then(res => console.log(res.data))
      .catch(err=>this.setState({err:"Data already registered"}));
      this.props.fun.setState({p:false,st:obj});
    }
render(){
  return (
      <div  className="form">
    <div className="login-page">
    <form>
            <input type="text" placeholder="Name" name='name' id="name" required onChange={this.c}/>
            <input type="text" placeholder="Roll Number" name="rn" id="rn" required required onChange={this.c}/>
            <input type="password" placeholder="Password" name="password" id="password" required required onChange={this.c}/>
            <input type="password" placeholder="Confirm Password" name="confirmPassword" id="confirmPassword" required required onChange={this.c}/>
            <input type='button' onClick={this.Signup}  name="submit" value="Create"  className="submit"></input>
            <p id="error1" style={{color:"red"}}>{this.state.err}</p>
            <p className="message" >Already registered? <button type="button"  onClick={this.change}>Sign In</button></ p>
        </form>
    </div>
    </div>
  );
}
}

export default Signup;

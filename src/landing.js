import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Course from './course';
import TT from './tt';
import Map from './Map';
class Landing extends Component{
  constructor(p)
  {
    super(p);
    document.body.style.background = "white";
    this.state = 
    {
      cl:true,
      cc:false,
      gf:false,
      stylec:{backgroundColor: "#58b851",fontSize: "2vw"},
      style:{fontSize: "2vw"},
      stylep:{fontSize: "2vw"},
      ll:[]
    };
    this.func=this.func.bind(this);
    this.cole=this.cole.bind(this);
    this.ste=this.ste.bind(this);
    this.grf=this.grf.bind(this);
    this.func();
  }
  async func()
  {

  }
cole()
{
  this.setState({cc:false,gf:false, stylec:{backgroundColor: "#58b851",fontSize: "2vw"},stylep:{fontSize: "2vw"},style:{fontSize: "2vw"}});
} 
ste()
{
  this.setState({cc:true,gf:false, stylec:{fontSize: "2vw"},stylep:{backgroundColor: "#58b851",fontSize: "2vw"},style:{fontSize: "2vw"}});
}
grf()
{
  this.setState({gf:true, stylec:{fontSize: "2vw"},stylep:{fontSize: "2vw"},style:{backgroundColor: "#58b851",fontSize: "2vw"}});
}
  render()
  {
    return(
    <div className="Landing">
      {this.state.cl||<Tabs style={{backgroundColor: "#9cd598", color:"#10230e"}} centered
      ><center><Tab label="Course Page" onClick={this.cole} style={this.state.stylec}/>
        <Tab label="Time Table" onClick={this.ste} style={this.state.stylep}/>
        <Tab label="Map" onClick={this.grf} style={this.state.style}/></center></Tabs>}
        {!this.state.cl||<div style={{position:"absolute",top:"30%",left:"45%"}}>
         Loading <ReactLoading type="spokes" color="red" height={'120%'} width={'120%'}/></div>}
       {this.state.cl||this.state.cc||this.state.gf||<Course></Course>}
       {this.state.cl||!this.state.cc||this.state.gf||<TT></TT>}
       {this.state.cl||!this.state.gf||<Map></Map>}
    </div>
    );
  }
}
export default Landing;
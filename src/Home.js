import React, { Component } from "react";
import logo from './vertical-farming-image.jpg';
 
class Home extends Component {
  render() {
    return (
      <div  style={{backgroundImage: `url(${logo})`, height:"90vh", backgroundSize:"cover", color:"white", textAlign:"center", backgroundRepeat: "no-repeat", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"}}>
        <br></br><br></br><br></br>
        <h1> <font size="15" face="baufra">O-PIN Agriculture Initiative</font></h1>
        <h3><font size="5" face="baufra">Inspiring and Empowering the High Tech Farmers of the Future.</font></h3>
        <br></br>
 {/* <img src={logo} style={{height:"200px"}} ></img> */}
      </div>
    );
  }
}
 
export default Home;
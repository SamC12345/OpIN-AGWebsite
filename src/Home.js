import React, { Component } from "react";
import logo from './vertical-farming-image.jpg';
 
class Home extends Component {
  render() {
    return (
      <div  style={{backgroundImage: `url(${logo})`, height:"85vh", backgroundSize:"contain", color:"wheat", textAlign:"center"}}>
        <h1>O-PIN Agriculture Initiative</h1>
        <h3><sub>Inspiring and Empowering the High Tech Farmers of the Future.</sub></h3>
        <br></br>
 {/* <img src={logo} style={{height:"200px"}} ></img> */}
      </div>
    );
  }
}
 
export default Home;
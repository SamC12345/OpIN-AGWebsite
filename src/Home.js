import React, { Component } from "react";
import logo from './vertical-farming-image.jpg';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>This will be a high level overview of what I do</p>
 <img src={logo} style={{height:"200px"}} ></img>
        <p>maybe i'll put some education here too</p>
      </div>
    );
  }
}
 
export default Home;
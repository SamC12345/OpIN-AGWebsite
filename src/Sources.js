import React, { Component } from "react";
import SimpleExpansionPanel from "./SimpleExpansionPanel2"
export default class Sources extends React.Component {
  constructor(props) {
      super(props);
  }

  
  

  render() {
      return <div style ={{padding: "25px" }}>
        <h2>Sources</h2><br></br>
        <SimpleExpansionPanel/>
      </div>
  }
};
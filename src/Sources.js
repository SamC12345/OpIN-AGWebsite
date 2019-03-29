import React, { Component } from "react";
import SimpleExpansionPanel from "./SimpleExpansionPanel2"
export default class Sources extends React.Component {
  constructor(props) {
      super(props);
  }

  
  

  render() {
      return <React.Fragment>
        <h2><br></br>Sources</h2><br></br>
        <SimpleExpansionPanel/>
      </React.Fragment>
  }
};
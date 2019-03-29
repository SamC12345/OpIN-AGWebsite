import React, { Component } from "react";
import SimpleExpansionPanel from "./SimpleExpansionPanel"
export default class Stuff extends React.Component {
  constructor(props) {
      super(props);
  }

  
  

  render() {
      return <React.Fragment>
        <h2>HELLO</h2>
        <p>Link to Lesson Plan for Week 1: </p>
        <SimpleExpansionPanel/>
      </React.Fragment>
  }
};
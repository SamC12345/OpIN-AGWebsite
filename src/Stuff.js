import React, { Component } from "react";
import SimpleExpansionPanel from "./SimpleExpansionPanel"
export default class Stuff extends React.Component {
  constructor(props) {
      super(props);
  }

  
  

  render() {
      return <div style ={{padding: "25px" }}>
        <h2>Curriculim</h2>
        <p>The following links contain our lesson plans : </p>
        <SimpleExpansionPanel/>
      </div>
  }
};
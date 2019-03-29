import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import SimpleAppBar from "./AppBar";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import About from "./About"
import Sources from "./Sources";
import "./Main.css";


class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div id="MainContainer">
                <div id="Navbar">
                    <SimpleAppBar />
                    {/* <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul> */}
                </div>
                <div id="Content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/curriculum" component={Stuff}/>
                    <Route path="/sources" component={Sources}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;
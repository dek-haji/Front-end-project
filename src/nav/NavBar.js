import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Input, Menu, Segment } from 'semantic-ui-react'
 import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"
import logo from "./logo.jpeg"

export default class NavBar extends Component {
//   
    handleSearch(input) {
        if (input.keyCode === 13) {
            console.log("HANDLE SEARCH - INPUT TARGET VALUE:", input.target.value);
            this.props.getSearchResults(input.target.value);
            // this.props.history.push("/search");
        }
    }
    render() {
        return (
          <nav className="navbar  flex-md-nowrap p-0 shadow">
            <img className= "image-nav"src = {logo}></img>
                <ul className="nav nav-pills">
              <li className="nav-item">
                <Link color="primary" variant="body1" className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link color="primary" variant="body1" className="nav-link" to="/notes">JS</Link>
              </li>
              <li className="nav-item">
                <Link color="primary" variant="body1" className="nav-link" to="/react">React</Link>
              </li>
              <li className="nav-item">
                <Link color="primary" variant="body1" className="nav-link" to="/bootstrap">Bootstrap</Link>
              </li>
              <li className="nav-item">
                <Link color="primary" variant="body1" className="nav-link" to="/others">Others</Link>
              </li>
                    <li className="nav-item">
            <div className="input-group input-group-sm mb-2 mt-1 ml-4">
            <Link className="nav-link" to="/search" >
      <i className="search icon"  ></i></Link>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onKeyUp={e => this.handleSearch(e)}
              />
            </div>
          </li>
                </ul>
          <li className="nav-item">
                <Link color="primary" variant="body1" className="nav-link" to="login">Logout</Link>
              </li>
            </nav>
        )
    }
}
// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import { fade } from '@material-ui/core/styles/colorManipulator';
// import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom'
// import "./NavBar.css"



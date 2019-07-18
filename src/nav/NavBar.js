import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import { Input, Menu, Segment } from 'semantic-ui-react'
 import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"
import logo from "./logo.jpeg"

class NavBar extends Component {
  isAuthenticated = () => sessionStorage.getItem("userId") !== null

    handleSearch(input) {
        if (input.keyCode === 13) {
            console.log("HANDLE SEARCH - INPUT TARGET VALUE:", input.target.value);
          this.props.getSearchResults(input.target.value);
            // this.props.history.push("/search");
        }
    }

    render() {
      if (this.props.history.location.pathname!== '/login' && (this.props.history.location.pathname !== '/register')){
        return (
          <nav className="navbar  flex-md-nowrap p-0 shadow">
            <img className= "image-nav"src = {logo} alt= ""></img>
                <ul className="nav nav-pills">
              <li className="nav-item">
                <Link color="primary" variant="body1" className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link color="primary" variant="body1" className="nav-link" to="/javascript">JS</Link>
              </li>
              <li className="nav-item">
                <Link color="primary" variant="bpdy3" className="nav-link" to="/react">React</Link>
              </li>
              <li className="nav-item">
                <Link color="primary" variant="bpdy3" className="nav-link" to="/bootstrap">Bootstrap</Link>
              </li>
              <li className="nav-item">
                <Link color="primary" variant="body3" className="nav-link" to="/others">Others</Link>
              </li>
                    <li className="ui search">
                    <div className="ui icon input">
            <Link className="nav-link" to="/search" >
                    <i className="search icon"  ></i></Link>
                    <Input className="prompt" type="text" ref= "" placeholder="Search..."  onKeyUp={e => this.handleSearch(e)}></Input>

            </div>
          </li>
                </ul>
          <li className="nav-item">
                <Link color="primary" variant="body1" className="nav-link" to="login">Logout</Link>
              </li>
            </nav>
        )
    }else {
      return null
    }
}
}
export default withRouter(NavBar)
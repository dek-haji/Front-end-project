import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Input, Menu, Segment } from 'semantic-ui-react'
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    handleSearch(input) {
        if (input.keyCode === 13) {
            console.log("HANDLE SEARCH - INPUT TARGET VALUE:", input.target.value);
            this.props.getSearchResults(input.target.value);
            // this.props.history.push("/search");
        }
    }
    render() {
        return (
            <nav className="navbar navbar-light light-grey flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/notes">JS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/react">React</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bootstrap">Bootstrap</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/others">Others</Link>
                    </li>
                    <li className="nav-item">
            <div className="input-group input-group-sm mb-2 mt-1 ml-4">
            <Link className="nav-link" to="/search">search</Link>
                
              
              <input
                type="text"
                className="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onKeyUp={e => this.handleSearch(e)}
              />
            </div>
          </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
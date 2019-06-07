import React, { Component } from "react"
import { Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-grey flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/javascript">JS</Link>
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
                </ul>
            </nav>
        )
    }
}

export default NavBar
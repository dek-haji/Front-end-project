import React, { Component } from "react"
import { Route,  Redirect } from 'react-router-dom'
import { withRouter } from "react-router";
import dbCalls from "./modules/dbCalls"
import JsForm from "./components/jsFile/JsForm"


const remoteURL = "http://localhost:5002"
class ApplicationViews extends Component {


    state = {
        js: [],
        react: [],
        bootstrap: [],
        other: [],
        users: [],
        notes: [],
    }
    getUserData() {
        console.log("didmount fired up")
        const newState = {};
    // let sessionId = sessionStorage.getItem("userId")
    dbCalls
      .all(`${remoteURL}/notes`)
      .then(js => (newState.js = js))
      .then(() => fetch("http://localhost:5002/react").then(r => r.json()))
      .then(react => (newState.react = react))
      .then(() => fetch(`http://localhost:5002/bootstrap`).then(r => r.json()))
      .then(bootstrap => (newState.bootstrap = bootstrap))
      .then(users => (newState.users = users))
        .then(() => this.setState(newState))
    }

    addForm = newObj =>
    dbCalls
    .post(newObj, `${remoteURL}/notes`)
    .then(() => dbCalls.all(`${remoteURL}/notes`))
    .then(js =>
        this.setState({
            js: js
        })
        );
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
return (
              <JsForm
                {...props}
                addForm={this.addForm}
                    js={this.state.js}
              />
            );
                }} />
                <Route path="/javascript" render={(props) => {

                }} />
                <Route path="/react" render={(props) => {

                }} />
                <Route path="/bootstrap" render={(props) => {

                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews
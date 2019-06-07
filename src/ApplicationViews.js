import React, { Component } from "react"
import { Route,  Redirect } from 'react-router-dom'
import { withRouter } from "react-router";
import dbCalls from "./modules/dbCalls"
import JsForm from "./components/jsFile/JsForm"


const remoteURL = "http://localhost:5002"
class ApplicationViews extends Component {
    state = {
        notes: [],
        noteTypes: [],
        users: [],
    }
    componentDidMount() {
            console.log(dbCalls.all)
            console.log("didmount fired up")
            const newState = {};
            // let sessionId = sessionStorage.getItem("userId")
            dbCalls
                .all(`${remoteURL}/notes`)
                .then(notes => (newState.notes = notes))
                .then(() => fetch("http://localhost:5002/noteTypes").then(r => r.json()))
                .then(noteTypes => (newState.noteTypes = noteTypes))
                .then((console.log(this.state.noteTypes)))
                .then(() => fetch(`http://localhost:5002/users`).then(r => r.json()))
                .then(users => (newState.users = users))
                .then(() => this.setState(newState))
    }

    addForm = newObj =>
    dbCalls.post(newObj, `${remoteURL}/notes`)
    .then(() => dbCalls.all(`${remoteURL}/notes`))
    .then(notes =>
        this.setState({
            notes: notes})
        );
    render() {
        console.log("note types",this.state.notes)
        console.log("dbcalls",dbCalls.all)
        return (
                    <React.Fragment>
                <Route exact path="/" render={(props) => {
            return (
              <JsForm
                {...props}
                    notes={this.state.notes}
                    addForm={this.addForm}
                    noteTypes={this.state.noteTypes}
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
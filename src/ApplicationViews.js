import React, { Component } from "react"
import { Route,  Redirect } from 'react-router-dom'
import { withRouter } from "react-router";
import dbCalls from "./modules/dbCalls"
import JsForm from "./components/jsFile/JsForm"
import JsList from "./components/jsFile/JsList";
import JsDetails from "./components/jsFile/JsDetails";


const remoteURL = "http://localhost:5002"
class ApplicationViews extends Component {
    state = {
        notes: [],
        noteTypes: [],
        users: [],
    }
    componentDidMount() {
            // ;
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

        deleteForm = id => {
            const newState = {};
            dbCalls
            .delete(id, `${remoteURL}/notes`)
            .then(() => dbCalls.all(`${remoteURL}/notes`))
            .then(notes => (newState.notes = notes))
            .then(() => this.setState(newState));
        };

    render() {
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
                <Route path="/notes" render={(props) => {
                    return (
                            <JsList
                                {...props}
                                notes={this.state.notes}
                                deleteForm={this.deleteForm}
                            />
                        );
                }} />


                <Route path="/notes/:noteId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let note = this.state.notes.find(note =>
                        note.id === parseInt(props.match.params.noteId)
                    )

                    // If the note wasn't found, create a default one
                    if (!note) {
                        note = { id: 404, title: "404" }
                    }

                    return <JsDetails note={note}
                        deleteForm={this.deleteForm} />
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
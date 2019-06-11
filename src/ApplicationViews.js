import React, { Component } from "react"
import { Route,  Redirect } from 'react-router-dom'
import { withRouter } from "react-router";
import dbCalls from "./modules/dbCalls"
import JsForm from "./components/jsFile/JsForm"
import JsList from "./components/jsFile/JsList";
import JsDetails from "./components/jsFile/JsDetails";
import JsEditForm from "./components/jsFile/JsEditForm";
import ReactList from "./components/reactFile/ReactList"
import BootstrapList from "./components/bootstrapFile/BootstrapList";


const remoteURL = "http://localhost:5002"
class ApplicationViews extends Component {
    state = {
        notes: [],
        noteTypes: [],
        users: [],
        javascript: [],
        react: [],
        bootstrap: [],
        others: []
    }
    componentDidMount() {
            // ;
            console.log("didmount fired up")
            const newState = {};
            // let sessionId = sessionStorage.getItem("userId")
            dbCalls
                .all("http://localhost:5002/notes?noteTypeId=1")
                .then(notes => (newState.notes = notes))
                .then(() => fetch("http://localhost:5002/noteTypes").then(r => r.json()))
                .then(noteTypes => (newState.noteTypes = noteTypes))
                .then((console.log(this.state.noteTypes)))
                .then(() => fetch(`http://localhost:5002/users`).then(r => r.json()))
                .then(users => (newState.users = users))
                // .then(() => fetch("http://localhost:5002/notes?noteTypeId=1").then(r => r.json()))
                // .then(notes => (newState.notes = notes))
                .then(() => fetch("http://localhost:5002/notes?noteTypeId=2").then(r => r.json()))
                .then(react => (newState.react = react))
                .then(() => fetch("http://localhost:5002/notes?noteTypeId=3").then(r => r.json()))
                .then(bootstrap => (newState.bootstrap = bootstrap))
                .then(() => fetch("http://localhost:5002/notes?noteTypeId=4").then(r => r.json()))
                .then(others => (newState.others = others))
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
        updateForm = (editedNotesObject) => {
            return dbCalls.put("http://localhost:5002/notes", editedNotesObject)
            .then(() => dbCalls.all(`${remoteURL}/notes`))
                .then(notes => {
                    this.props.history.push("/notes")
                    this.setState({
                notes: notes
              })
            });
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
                <Route exact path="/notes" render={(props) => {
                    
                    return (
                            <JsList
                                {...props}
                                notes={this.state.notes}
                            deleteForm={this.deleteForm}
                            updateForm={this.updateForm}
                            />
                        );
                }} />

                <Route exact  path="/react" render={(props) => {
                    return (
                            <JsList
                                {...props}
                                notes={this.state.notes}
                            deleteForm={this.deleteForm}
                            updateForm={this.updateForm}/>
                        );
                }} />

                <Route path="/notes/:noteId(\d+)" render={(props) => {
                    // Find the notes with the id of the route parameter
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

<Route
                    exact path="/notes/:noteId(\d+)/edit" render={props => {
                        return <JsEditForm {...props}
                            notes={this.state.notes}
                            updateForm={this.updateForm}
                            noteTypes={this.state.noteTypes}/>
                    }} />

                <Route path="/react" render={(props) => {
                           return (  <ReactList
                                {...props}
                               react={this.state.react}
                            deleteForm={this.deleteForm}
                            updateForm={this.updateForm}/>
                        );
                }} />
                 <Route path="/bootstrap" render={(props) => {
                     return (  <BootstrapList
                                {...props}
                               bootstrap={this.state.bootstrap}
                            deleteForm={this.deleteForm}
                            updateForm={this.updateForm}/>
                        );
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews
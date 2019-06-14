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
import BootstrapDetails from "./components/bootstrapFile/BootstrapDetails";
import ReactDetails from "./components/reactFile/ReactDetails"
import ReactEditForm from "./components/reactFile/ReactEditForm"
import BootstrapEditForm from "./components/bootstrapFile/BootstrapEditForm";
import SearchResults from "./components/search/SearchResults"


const remoteURL = "http://localhost:5002"
class ApplicationViews extends Component {
    state = {
        notes: [],
        noteTypes: [],
        users: [],
        // javascript: [],
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

    addForm = newObj => {
        const newState = {};
        return dbCalls.post(newObj, "http://localhost:5002/notes")
        .then(() => dbCalls.all("http://localhost:5002/notes?noteTypeId=1"))
        .then(notes => (newState.notes = notes))
        .then(() => fetch("http://localhost:5002/noteTypes").then(r => r.json()))
        .then(noteTypes => (newState.noteTypes = noteTypes))
        .then((console.log(this.state.noteTypes)))
        .then(() => fetch(`http://localhost:5002/users`).then(r => r.json()))
        .then(users => (newState.users = users))
        .then(() => fetch("http://localhost:5002/notes?noteTypeId=2").then(r => r.json()))
        .then(react => (newState.react = react))
        .then(() => fetch("http://localhost:5002/notes?noteTypeId=3").then(r => r.json()))
        .then(bootstrap => (newState.bootstrap = bootstrap))
        .then(() => fetch("http://localhost:5002/notes?noteTypeId=4").then(r => r.json()))
        .then(others => (newState.others = others))
        .then(() => this.setState(newState))
    };

        deletejs = id => {
            const newState = {};
            dbCalls
            .delete(id, `${remoteURL}/notes`)
            .then(() => dbCalls.all(`${remoteURL}/notes?noteTypeId=1`))
            .then(notes => (newState.notes = notes))
            .then(() => this.setState(newState));
        };
        deleteReact = id => {
            const newState = {};
            dbCalls
            .delete(id, `${remoteURL}/notes`)
            .then(() => dbCalls.all(`${remoteURL}/notes?noteTypeId=2`))
            .then(react => (newState.react = react))
            .then(() => this.setState(newState));
        };
        deleteBootstrap = id => {
            const newState = {};
            dbCalls
            .delete(id, `${remoteURL}/notes`)
            .then(() => dbCalls.all(`${remoteURL}/notes?noteTypeId=3`))
            .then(bootstrap => (newState.bootstrap = bootstrap))
            .then(() => this.setState(newState));
        };
        updateJs = (editedNotesObject) => {
            return dbCalls.put("http://localhost:5002/notes", editedNotesObject)
            .then(() => dbCalls.all(`${remoteURL}/notes?noteTypeId=1`))
                .then(notes => {
                    this.props.history.push("/notes")
                    this.setState({
                notes: notes
              })
            });
        };
        updateReact = (editedNotesObject) => {
            return dbCalls.put("http://localhost:5002/notes", editedNotesObject)
            .then(() => dbCalls.all(`${remoteURL}/notes?noteTypeId=2`))
                .then(react => {
                    this.props.history.push("/react")
                    this.setState({
                react: react
              })
            });
        };

        updateBootstrap = (editedNotesObject) => {
            return dbCalls.put("http://localhost:5002/notes", editedNotesObject)
            .then(() => dbCalls.all(`${remoteURL}/notes?noteTypeId=3`))
                .then(bootstrap => {
                    this.props.history.push("/bootstrap")
                    this.setState({
                bootstrap: bootstrap
              })
            });
        };
    render() {
        console.log("react state", this.state.react)
        console.log("bootstrap state", this.state.bootstrap)
        console.log("javascript state",this.state.notes)
        return (
                    <React.Fragment>
                <Route exact path="/" render={(props) => {
            return (
              <JsForm
                {...props}
                    notes={this.state.notes}
                    bootstrap={this.state.bootstrap}
                    react={this.state.react}
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
                            updateJs={this.updateJs}
                            deletejs={this.deletejs}
                            />
                        );
                }} />
                <Route path="/notes/:noteId(\d+)" render={(props) => {
                    // Find the notes with the id of the route parameter
                    let note = this.state.notes.find(note =>
                        note.id === parseInt(props.match.params.noteId)
                    )
                    let react = this.state.react.find(reacct =>
                        reacct.id === parseInt(props.match.params.reactId)
                        )
                    // If the note wasn't found, create a default one
                    if (!note && !react){
                        note = { id: 404, title: "404" }
                        react = { id: 505, title: "505"}
                    }

                    return <JsDetails note={note}
                        react={react}
                        updateJs={this.updateJs} />
                }} />



<Route path="/react/:reactId(\d+)" render={(props) => {
                    // Find the react with the id of the route parameter
                    let react = this.state.react.find(reacct =>
                        reacct.id === parseInt(props.match.params.reactId)
                        )
                    // If the note wasn't found, create a default one
                    if (!react){
                        react = { id: 505, title: "505"}
                    }

                    return <ReactDetails
                        react={react}
                      />
                }} />

<Route
                    exact path="/notes/:noteId(\d+)/edit" render={props => {
                        return <JsEditForm {...props}
                            notes={this.state.notes}
                            updateJs={this.updateJs}
                            noteTypes={this.state.noteTypes}/>
                    }} />
                <Route
                    exact path="/react/:reactId(\d+)/edit" render={props => {
                        return <ReactEditForm {...props}
                            notes={this.state.notes}
                            updateReact={this.updateReact}
                            noteTypes={this.state.noteTypes}/>
                    }} />

                <Route exact path="/react" render={(props) => {
                           return (  <ReactList
                                {...props}
                               react={this.state.react}
                               notes={this.state.notes}
                                deleteReact={this.deleteReact}
                               updateReact={this.updateReact}
                            />
                        );
                }} />
                 <Route exact path="/bootstrap" render={(props) => {
                     return (  <BootstrapList
                                {...props}
                         bootstrap={this.state.bootstrap}
                         notes={this.state.notes}
                                deleteBootstrap={this.deleteBootstrap}
                                updateBootstrap={this.updateBootstrap}/>
                        );
                }} />
                 <Route
                    exact path="/bootstrap/:bootstrapId(\d+)/edit" render={props => {
                        return <BootstrapEditForm {...props}
                            notes={this.state.notes}
                            updateBootstrap={this.updateBootstrap}
                            noteTypes={this.state.noteTypes}/>
                    }} />

    <Route path="/bootstrap/:bootstrapId(\d+)" render={(props) => {
                    // Find the bootstrap with the id of the route parameter
                    let bootstrap = this.state.bootstrap.find(boots =>
                        boots.id === parseInt(props.match.params.bootstrapId)
                        )
                    // If the note wasn't found, create a default one
                    if (!bootstrap){
                        bootstrap = { id: 505, title: "505"}
                    }

                    return <BootstrapDetails
                        bootstrap={bootstrap}
                      />
                }} />

<Route
          path="/search"
          render={props => {
            return <SearchResults searchResults={this.props.searchResults} />;
          }}
        />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)
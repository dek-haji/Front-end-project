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
import Login from "./components/Auth/Login"
import Registration from "./components/Auth/Registration"
import OtherList from "./components/othersCard/OtherList"
import OtherDetails from "./components/othersCard/OtherDetails"
const remoteURL = "http://localhost:5002";
const usersURL = `${remoteURL}/users`

class ApplicationViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("username") !== null
    state = {
        notes: [],
        noteTypes: [],
        users: [],
        react: [],
        bootstrap: [],
        others: [],
        allNotes: [],
        sessionId: sessionStorage.getItem("userId")
    }
    componentDidMount() {
            // ;
            console.log("didmount fired up")
            const newState = {};
            let sessionId = sessionStorage.getItem("userId")
            dbCalls
                .all("http://localhost:5002/notes?noteTypeId=1")
                .then(notes => (newState.notes = notes))
                .then(() => fetch("http://localhost:5002/noteTypes").then(r => r.json()))
                .then(noteTypes => (newState.noteTypes = noteTypes))
                .then((console.log(this.state.noteTypes)))
                .then(() => fetch(`http://localhost:5002/users`).then(r => r.json()))
                .then(users => (newState.users = users))
                .then(() => fetch("http://localhost:5002/notes").then(r => r.json()))
                .then(allNotes => (newState.allNotes = allNotes))
                .then(() => fetch("http://localhost:5002/notes?noteTypeId=2").then(r => r.json()))
                .then(react => (newState.react = react))
                .then(() => fetch("http://localhost:5002/notes?noteTypeId=3").then(r => r.json()))
                .then(bootstrap => (newState.bootstrap = bootstrap))
                .then(() => fetch("http://localhost:5002/notes?noteTypeId=4").then(r => r.json()))
                .then(others => (newState.others = others))
                .then(() => fetch("http://localhost:5002/users").then(r => r.json()))
                .then(users => (newState.users = users))
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
    addUser = (user) => dbCalls.post(user, usersURL)
    .then(() => dbCalls.all(usersURL))
    .then(Allusers => this.setState({
        users: Allusers             //added this three line of codes today to set the new user.
    }))
    updateComponent = () => {
        dbCalls.getUsers().then(allUsers => {
            this.setState({ users: allUsers });
            console.log(allUsers)
        })
    }
        deletejs = id => {
            const newState = {};
            dbCalls
            .delete(id, `${remoteURL}/notes`)
            .then(() => dbCalls.all(`${remoteURL}/notes?noteTypeId=1`))
            .then(notes => (newState.notes = notes))
            .then(() => this.setState(newState));
        };

        deleteOthers = id => {
            const newState = {};
            dbCalls
            .delete(id, `${remoteURL}/notes`)
            .then(() => dbCalls.all(`${remoteURL}/notes?noteTypeId=4`))
            .then(others => (newState.others = others))
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
        console.log("others", this.state.others)
        return (
            <React.Fragment>
                  <Route exact path="/login" render={(props) => {
                    return <Login {...props}
                        users={this.state.users}
                        updateComponent={this.updateComponent} />
                }} />
                <Route exact path="/register" render={(props) => {
                return <Registration {...props}
                         users={this.state.users}
                        addUser={this.addUser} />
                }} />
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
            return (
              <JsForm
                {...props}
                    notes={this.state.notes}
                    bootstrap={this.state.bootstrap}
                    react={this.state.react}
                    addForm={this.addForm}
                    noteTypes={this.state.noteTypes}
              />
            )
        } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/notes" render={(props) => {
                    if (this.isAuthenticated()) {
                        return (
                            <JsList
                                {...props}
                                notes={this.state.notes}
                                updateJs={this.updateJs}
                                deletejs={this.deletejs}
                            />
                        )
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/notes/:noteId(\d+)" render={(props) => {
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
                    if (this.isAuthenticated()) {
                    return <JsDetails note={note}
                        react={react}
                        updateJs={this.updateJs} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />



<Route exact path="/react/:reactId(\d+)" render={(props) => {
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

<Route exact path="/others/:othersId(\d+)" render={(props) => {
                    // Find the others with the id of the route parameter
                    let others = this.state.others.find(reacct =>
                        reacct.id === parseInt(props.match.params.othersId)
                        )
                    // If the note wasn't found, create a default one
                    if (!others){
                        others = { id: 505, title: "505"}
                    }

                    return <OtherDetails
                        others={others}
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
                    if (this.isAuthenticated()) {
                           return (  <ReactList
                                {...props}
                               react={this.state.react}
                               notes={this.state.notes}
                                deleteReact={this.deleteReact}
                               updateReact={this.updateReact}
                               users={this.state.users}
                            />
                        )
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                 <Route exact path="/bootstrap" render={(props) => {
                      if (this.isAuthenticated()) {
                    return (<BootstrapList
                     
                                {...props}
                         bootstrap={this.state.bootstrap}
                         notes={this.state.notes}
                                deleteBootstrap={this.deleteBootstrap}
                                updateBootstrap={this.updateBootstrap}/>
                    )
                } else {
                        return <Redirect to="/login" />
                    }
                }} />
                 <Route
                    exact path="/bootstrap/:bootstrapId(\d+)/edit" render={props => {
                        return <BootstrapEditForm {...props}
                            notes={this.state.notes}
                            updateBootstrap={this.updateBootstrap}
                            noteTypes={this.state.noteTypes}/>
                    }} />

    <Route exact path="/bootstrap/:bootstrapId(\d+)" render={(props) => {
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

<Route exact path="/others" render={(props) => {
                    if (this.isAuthenticated()) {
                           return (  <OtherList
                                {...props}
                                deleteOthers={this.deleteOthers}
                               updateReact={this.updateReact}
                               users={this.state.users}
                               others={this.state.others}
                               notes={this.state.notes}
                            />
                        )
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

<Route
    exact path="/search"
                    render={props => {
                        if (this.isAuthenticated()) {
                            return (<SearchResults {...props}
                                searchResults={this.props.searchResults} 
                                noteTypes={this.state.noteTypes}/>
                                
            )
            } else {
                        return <Redirect to="/login" />
                    }
          }}
        />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)
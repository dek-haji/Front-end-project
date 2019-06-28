import React, { Component } from "react";
import { Button } from 'semantic-ui-react'
import note from "./note.png"



export default class JsForm extends Component {

  // Set initial state
  state = {
        jsTitle: "",
        jsURL: "",
        jsSnippet: "",
        jsNotes: "",
      noteTypeId: "",
  };

  // Update state whenever an input field is edited
  handleFieldChange = (event) => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    console.log(stateToChange)
    this.setState(stateToChange)
  };

  embedURL = (event) => {
    //this function gets the user input then splits in two, and gets the ID of the URL
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value.split("v=")[1].split("&list=")[0]
    console.log(stateToChange)
    this.setState(stateToChange);

  }
  

  
  /*
        Local method for validation, creating article object, and
        invoking the function reference passed from parent component
     */
    constructNewEvent = e => {
        e.preventDefault();
         let userId = sessionStorage.getItem('userId')
        if (this.state.noteTypes === "") {
            window.alert("Please select technology")
        } else {
            const newObj = {
                title: this.state.jsTitle,
                URL: this.state.jsURL,
                snippet: this.state.jsSnippet,
                note: this.state.jsNotes,
                noteTypeId: parseInt(this.state.noteTypeId),
                userId: parseInt(userId)
            };

            this.props.addForm(newObj)
              .then(() => this.props.history.push("/javascript"))
        }
    };

  render() {

    return (
      <React.Fragment >
        <h1>Start Your Note Taking</h1>
        <div className="test1">
        <form className="JsForm">
          <div className="form-group1">
            <label htmlFor="jsTitle">Title:</label>
            <input
              type="text"
              required
              className="form-control"
              
              onChange={this.handleFieldChange}
              id="jsTitle"
              placeholder="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="jsURL">URL</label>
            <input
              type="URL"
              required
              className="form-control"
              onChange={this.embedURL}
              id="jsURL"
                placeholder="https://example.com"
                pattern="https://.*"
            />
          </div>
          <div className="form-group">
            <label htmlFor="jsSnippet">Snippet</label>
            <input
              type="text"
              required
              className="form-control-snippet"
              onChange={this.handleFieldChange}
              id="jsSnippet"
              // placeholder="snippet"
            />
                </div>
                <div className="form-group">
            <label htmlFor="jsNotes">Notes</label>
            <textarea
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="jsNotes"
              placeholder="notes"
            />
                </div>
                <div className="form-group">
            <label htmlFor="noteType"></label>
            <select
              defaultValue=""
              name="noteTypes"
              id="noteTypeId"
              onChange={this.handleFieldChange}
            >
              <option value="">Selecter</option>
              {this.props.noteTypes.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <Button variant="outlined" color="facebook" size="large"
            type="submit"
            onClick={this.constructNewEvent}
            className="btn btn-primary"
          >
            Submit New File
          </Button>
        </form>
        
          <img className="imagesss" src={note}></img>
          
          </div>
      </React.Fragment>
    );
  }
}

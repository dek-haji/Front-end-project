import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



export default class JsForm extends Component {

  // Set initial state
  state = {
        jsTitle: "",
        jsURL: "",
        jsSnippet: "",
        jsNotes: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = (event) => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    console.log(stateToChange)
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating article object, and
        invoking the function reference passed from parent component
     */
  constructNewEvent = e => {
    e.preventDefault();
    // let userId = sessionStorage.getItem('userId')
    const newObj = {
        title: this.state.jsTitle,
        URL: this.state.jsURL,
        snippet: this.state.jsSnippet,
        notes: this.state.jsNotes,
        // userId: parseInt(userId)
    };

    // Create the article and redirect user to article list
    this.props
      .addForm(newObj)
      .then(() => this.props.history.push("/javascript"));
  }

  render() {

    return (
      <React.Fragment >
        <form className="JsForm">
          <div className="form-group">
            <label htmlFor="jsTitle">Title:</label>
            <TextField
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
            <TextField
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="jsURL"
              placeholder="URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="jsSnippet">Snippet</label>
            <TextField
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="jsSnippet"
              placeholder="snippet"
            />
                </div>
                <div className="form-group">
            <label htmlFor="jsNotes">Notes</label>
            <TextField
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="jsNotes"
              placeholder="notes"
            />
          </div>
          <Button variant="outlined" color="primary" size="large"
            type="submit"
            onClick={this.constructNewEvent}
            className="btn btn-primary"
          >
            Submit New File
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

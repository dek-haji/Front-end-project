import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import dbCalls from '../../modules/dbCalls';

class JsEditForm extends Component {
     // Set initial state
     state = {
        jsTitle: "",
        jsURL: "",
        jsSnippet: "",
        jsNotes: "",
      noteTypeId: "",
     }
    
     handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
     }
    
    updateNewEvent = e => {
        e.preventDefault();
        // let userId = sessionStorage.getItem('userId')
        if (this.state.noteTypes === "") {
            window.alert("Please select technology")
        } else {
            const editedObj = {
                title: this.state.jsTitle,
                URL: this.state.jsURL,
                snippet: this.state.jsSnippet,
                note: this.state.jsNotes,
                noteTypeId: parseInt(this.state.noteTypeId)
                // userId: parseInt(userId)
            };

            // Create the article and redirect user to article list
            this.props.updateForm(editedObj)
        }
    };
    componentDidMount() {
        dbCalls.get(this.props.match.params.noteId)
        .then(note => {
          this.setState({
            jsTitle: note.title,
              jsURL: note.URL,
              "jsSnippet": note.snippet,
            "jsNotes": note.note,
            noteTypeId: note.noteTypeId
          });
        });
      }

    embedURL = (event) => {
        //this function gets the user input then splits in two, and gets the ID of the URL
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value.split("v=")[1]
        console.log(stateToChange)
        this.setState(stateToChange);
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
                <button variant="outlined" color="primary" size="large"
                  type="submit"
                  onClick={this.constructNewEvent}
                  className="btn btn-primary"
                >
                  edit
                </button>
              </form>
            </React.Fragment>
          );
    }
}

export default JsEditForm;

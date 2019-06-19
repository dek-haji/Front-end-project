import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import dbCalls from '../../modules/dbCalls';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class ReactEditForm extends Component {
     // Set initial state
     state = {
        title: "",
        URL: "",
        snippet: "",
        notes: "",
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
                id: this.props.match.params.reactId,
                title: this.state.title,
                URL: this.state.URL,
                snippet: this.state.snippet,
                notes: this.state.notes,
                noteTypeId: parseInt(this.state.noteTypeId)
                // userId: parseInt(userId)
            };

            // Create the article and redirect user to article list
            this.props.updateReact(editedObj)
        }
    };
    componentDidMount() {
        dbCalls.get("http://localhost:5002/notes",this.props.match.params.reactId)
        .then(note => {
            this.setState({
            title: note.title,
              URL: note.URL,
              "snippet": note.snippet,
            "notes": note.note,
            noteTypeId: note.noteTypeId
          });
        });
      }


      embedURL = (event) => {
        //this function gets the user input then splits in two, and gets the ID of the URL
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value.split("v=")[1].split("&list=")[0]
        console.log(stateToChange)
        this.setState(stateToChange);
    
    }
    render() {
        return (
            <React.Fragment >
              <form className="JsForm">
                <div className="form-group">
                  <TextField
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="title"
                   value = {this.state.title}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    // required
                    className="form-control"
                    onChange={this.embedURL}
                    id="URL"
                      placeholder="https://example.com"
                            // pattern="https://.*"
                    value = {this.state.URL}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="snippet"
                    value = {this.state.snippet}
                  />
                      </div>
                      <div className="form-group">
                  <TextField
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="notes"
                    value = {this.state.notes}
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
                    <option value="">Selector</option>
                    {this.props.noteTypes.map(e => (
                      <option key={e.id} id={e.id} value={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                <Button variant="outlined" color="primary" size="large"
                  type="submit"
                  onClick={this.updateNewEvent}
                  className="btn btn-primary"
                >
                  update
                </Button>
              </form>
            </React.Fragment>
          );
    }
}

export default ReactEditForm;

import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import dbCalls from '../../modules/dbCalls';

class BootstrapEditForm extends Component {
     // Set initial state
     state = {
        title: "",
        URL: "",
        snippet: "",
        note: "",
       noteTypeId: "",
      userId: "",
     }
    
     handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
     }
    
    updateNewEvent = e => {
        e.preventDefault();
         let userId = sessionStorage.getItem('userId')
        if (this.state.noteTypes === "") {
            window.alert("Please select technology")
        } else {
            const editedObj = {
                id: this.props.match.params.bootstrapId,
                title: this.state.title,
                URL: this.state.URL,
                snippet: this.state.snippet,
                note: this.state.note,
                noteTypeId: parseInt(this.state.noteTypeId),
                 userId: parseInt(userId)
            };

            // Create the article and redirect user to article list
            this.props.updateBootstrap(editedObj)
        }
    };
    componentDidMount() {
        dbCalls.get("http://localhost:5002/notes",this.props.match.params.bootstrapId)
        .then(note => {
            this.setState({
            title: note.title,
              URL: note.URL,
              "snippet": note.snippet,
            "note": note.note,
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
                    id="note"
                    value = {this.state.note}
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
                <button variant="outlined" color="primary" size="large"
                  type="submit"
                  onClick={this.updateNewEvent}
                  className="btn btn-primary"
                >
                  update
                </button>
              </form>
            </React.Fragment>
          );
    }
}

export default BootstrapEditForm;

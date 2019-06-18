import React, { Component } from 'react';
import { Embed } from 'semantic-ui-react'
import js from  "./js.jpg"
import "./Js.css"
import { Card, Icon, Image, Button } from 'semantic-ui-react'
class JsDetails extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }
    render() {
        return (
            <section className="notes">
            <div key={this.props.note.id} className="card">
                <div className="card-body">
                        <Embed id = {this.props.note.URL} placeholder= {js} source='youtube' />
                    <h4 className="card-title">
                        {this.props.note.title }
                        </h4>
                            <p className = "snippet">{this.props.note.snippet}</p>
                            <pre>{this.props.note.note}</pre>
                    {/* <h6 className="card-title">{ this.props.note.snippet }</h6> */}
                    {/* <Button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true }, //clicking the button updates the button state from false to true,
                                    () => this.props.deletejs(this.props.note.id)
                                )
                            }
                        }
                        disabled={ this.state.saveDisabled }
                        className="card-link">Delete</Button> */}
                </div>
            </div>
        </section>
        );
    }
}

export default JsDetails;

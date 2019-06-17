import React, { Component } from 'react';
import { Embed } from 'semantic-ui-react'
import "./React.css"
import react from "./react.png"

class ReactDetails extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }
    render() {
        return (
            <section className="notes">
            <div key={this.props.react.id} className="card">
                <div className="card-body">
                        <Embed id={this.props.react.URL} placeholder= {react} source='youtube' />
                    <h2 className="card-title">
                        {this.props.react.title }
                        </h2>
                            <p className= "snippet">{this.props.react.snippet}</p>
                            <p>{this.props.react.notes}</p>
                    {/* <h6 className="card-title">{ this.props.react.snippet }</h6> */}
                    {/* <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true }, //clicking the button updates the button state from false to true,
                                    () => this.props.deleteReact(this.props.react.id)
                                )
                            }
                        }
                        disabled={ this.state.saveDisabled }
                        className="card-link">Delete</button> */}
                </div>
            </div>
        </section>
        );
    }
}

export default ReactDetails;

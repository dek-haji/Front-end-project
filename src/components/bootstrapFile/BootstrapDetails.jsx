import React, { Component } from 'react';
import { Embed } from 'semantic-ui-react'

class BootstrapDetails extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }
    render() {
        return (
            <section className="notes">
            <div key={this.props.note.id} className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.note.title }
                        </h4>
                        <Embed id = {this.props.note.URL} placeholder='' source='youtube' />
                            <p>{this.props.note.snippet}</p>
                            <p>{this.props.note.note}</p>
                    {/* <h6 className="card-title">{ this.props.note.snippet }</h6> */}
                    <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true }, //clicking the button updates the button state from false to true,
                                    () => this.props.deletejs(this.props.note.id)
                                )
                            }
                        }
                        disabled={ this.state.saveDisabled }
                        className="card-link">Delete</button>
                </div>
            </div>
        </section>
        );
    }
}

export default BootstrapDetails;

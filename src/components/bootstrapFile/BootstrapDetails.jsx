import React, { Component } from 'react';
import { Embed } from 'semantic-ui-react'

class BootstrapDetails extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }
    render() {
        return (
            <section className="notes">
            <div key={this.props.bootstrap.id} className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.bootstrap.title }
                        </h4>
                        <Embed id = {this.props.bootstrap.URL} placeholder='' source='youtube' />
                            <p>{this.props.bootstrap.snippet}</p>
                            <p>{this.props.bootstrap.bootstrap}</p>
                    {/* <h6 className="card-title">{ this.props.note.snippet }</h6> */}
                    <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true }, //clicking the button updates the button state from false to true,
                                    () => this.props.deletejs(this.props.bootstrap.id)
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

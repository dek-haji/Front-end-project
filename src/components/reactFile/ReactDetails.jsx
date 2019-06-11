import React, { Component } from 'react';
import { Embed } from 'semantic-ui-react'

class JsDetails extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }
    render() {
        return (
            <section className="notes">
            <div key={this.props.react.id} className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.react.title }
                        </h4>
                        <Embed id = {this.props.react.URL} placeholder='' source='youtube' />
                            <p>{this.props.react.snippet}</p>
                            <p>{this.props.react.react}</p>
                    {/* <h6 className="card-title">{ this.props.react.snippet }</h6> */}
                    <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true }, //clicking the button updates the button state from false to true,
                                    () => this.props.deleteReact(this.props.react.id)
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

export default JsDetails;

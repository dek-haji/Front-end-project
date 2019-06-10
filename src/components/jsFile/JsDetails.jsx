import React, { Component } from 'react';

class JsDetails extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }
    render() {
        return (
            <section className="note">
            <div key={ this.props.note.id } className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        { this.props.note.name }
                    </h4>
                    <h6 className="card-title">{ this.props.note.snippet }</h6>
                    <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true }, //clicking the button updates the button state from false to true,
                                    () => this.props.deleteForm(this.props.note.id)
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

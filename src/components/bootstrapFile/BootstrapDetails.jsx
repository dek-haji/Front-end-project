import React, { Component } from 'react';
import { Embed } from 'semantic-ui-react'
import bootstrap from "./bootstrap.png"
import Highlight from 'react-highlight'
import { Card, Icon, Image, Button, Modal } from 'semantic-ui-react'
class BootstrapDetails extends Component 
{
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }

    render() {
        return (

            <section className="dek-notes">


            <div key={this.props.bootstrap.id} className="card">
                <div className="card-body">
                        <Embed id={this.props.bootstrap.URL} placeholder= {bootstrap} source='youtube' />
                    <h2 className="card-title">
                        {this.props.bootstrap.title }
                        </h2>
                        <Highlight language={"jsx"} className="bootstrap-snippet">{this.props.bootstrap.snippet}</Highlight>
                        {/* <Modal trigger={<Button>Show Modal</Button>}>
                        <Highlight language={"jsx"} className="bootstrap-snippet">{this.props.bootstrap.snippet}</Highlight>
                    </Modal> */}
                            <p>{this.props.bootstrap.note}</p>

                </div>
            </div>
        </section>
        );
    }
}
export default BootstrapDetails;


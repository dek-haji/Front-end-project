import React, { Component } from 'react';
import { Embed } from 'semantic-ui-react'
import js from  "./js.jpg"
import "./Js.css"
import Highlight from 'react-highlight'
import { Card, Icon, Image, Button, Modal } from 'semantic-ui-react'
class JsDetails extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }

    render() {
        return (

            <section className="dek-notes">


            <div key={this.props.note.id} className="card">
                <div className="card-body">
                        <Embed id={this.props.note.URL} placeholder= {js} source='youtube' />
                    <h1 className="card-title">
                        {this.props.note.title }
                        </h1>
                        <Highlight language={"jsx"} className="note-snippet">{this.props.note.snippet}</Highlight>
                        <Modal trigger={<Button>Show Modal</Button>}>
                        <Highlight language={"jsx"} className="note-snippet">{this.props.note.snippet}</Highlight>
                    </Modal>
                            <div className = "notess"><p>{this.props.note.note}</p></div>

                </div>
            </div>
        </section>
        );
    }
}


export default JsDetails;



import React, { Component } from 'react';
import { Embed, Button, Modal  } from 'semantic-ui-react'
import js from  "./js.jpg"
import "./Js.css"
import Highlight from 'react-highlight'
class JsDetails extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }

    render() {
        return (

            <section className="dek-notes">


            <div key={this.props.javascript.id} className="card">
                <div className="card-body">
                        <Embed id={this.props.javascript.URL} placeholder= {js} source='youtube' />
                    <h1 className="card-title">
                        {this.props.javascript.title }
                        </h1>
                        <Highlight language={"jsx"} className="javascript-snippet">{this.props.javascript.snippet}</Highlight>
                        {/* <Modal trigger={<Button>Show Modal</Button>}>
                        <Highlight language={"jsx"} className="javascript-snippet">{this.props.javascript.snippet}</Highlight>
                    </Modal> */}
                            <div className = "notess"><p>{this.props.javascript.note}</p></div>

                </div>
            </div>
        </section>
        );
    }
}


export default JsDetails;



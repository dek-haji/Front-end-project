import React, { Component } from 'react';
import { Embed, Image, Modal, Button, Container } from 'semantic-ui-react'
import "./React.css"
import react from "./react.png"
import Highlight from 'react-highlight'
class ReactDetails extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }
    

    render() {
        
        return (

            <section className="dek-notes">


            <div key={this.props.react.id} className="card">
                <div className="card-body">
                        <Embed id={this.props.react.URL} placeholder= {react} source='youtube' />
                    <h2 className="card-title">
                        {this.props.react.title }
                        </h2>
                        <Highlight language={"jsx"} className="react-snippet">{this.props.react.snippet}</Highlight>
                        <Modal trigger={<Button>Show</Button>} content="Content" >
                        <Highlight language={"jsx"} className="react-snippet">{this.props.react.snippet}</Highlight>
                        </Modal>
                      
                            <p>{this.props.react.note}</p>
                            

                </div>
            </div>
        </section>
        );
    }
}

export default ReactDetails;

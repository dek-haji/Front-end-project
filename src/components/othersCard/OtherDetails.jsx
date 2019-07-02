import React, { Component } from 'react';
import { Embed, Image, Modal, Button} from 'semantic-ui-react'
import others from "./others.png"
import Highlight from 'react-highlight'
class OtherDetails
 extends Component {
    state = {
        saveDisabled: false //initail state of the button before it clicks
    }

    render() {
        return (

            <section className="dek-notes">


            <div key={this.props.others.id} className="card">
                <div className="card-body">
                        <Embed id={this.props.others.URL} placeholder= {others} source='youtube' />
                    <h1 className="card-title">
                        {this.props.others.title }
                        </h1>
                        <Highlight language={"jsx"} className="others-snippet">{this.props.others.snippet}</Highlight>
                        {/* <Modal trigger={<Button>Show Modal</Button>}>
                        <Highlight language={"jsx"} className="others-snippet">{this.props.others.snippet}</Highlight>
                    </Modal> */}
                            <p>{this.props.others.note}</p>

                </div>
            </div>
        </section>
        );
    }
}

export default OtherDetails
;

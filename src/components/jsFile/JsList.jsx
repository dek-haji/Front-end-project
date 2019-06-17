import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from 'semantic-ui-react'

import "./Js.css"

class JsList extends Component {
    handleClick = (event)=> {
        console.log("its working", this.props.notes.id)
        console.log(event)
        this.props.deletejs(this.props.notes.id)
    }
    render() {
        // console.log('this is the props in notes List',this.props)
        return (
            <>
            <section className="Js-notes">
                    <h1>JS notes</h1>
                {
                    this.props.notes.map(note=>
                    <Card key={note.id}>
                    <Card.Content>
                            <h3>{note.title}</h3>
                            </Card.Content>
                            <Link className="nav-link" to={`/notes/${note.id}`}>Details</Link> <br/>
                        <Button basic color='orange' onClick={()=> {this.props.deletejs(note.id)}} >DELETE</Button>

                        <Button basic color='teal' type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push(`/notes/${note.id}/edit`);
                        }}>
                        Edit
                        </Button>
                </Card>
                )
           }
                </section>
                </>
        );
    }
}

export default JsList;

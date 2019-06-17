import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from 'semantic-ui-react'

 import "./Bootstrap.css"

class BootstrapList extends Component {
    handleClick = (event)=> {
        console.log("its working", this.props.bootstrap.id)
        console.log(event)
        this.props.deleteForm(this.props.bootstrap.id)
    }
    render() {
        // console.log('this is the props in notes List',this.props)
        return (
            <>
            <section className="boots">
                    <h1>Bootstrap notes</h1>
                {
                    this.props.bootstrap.map(note=>
                    <Card key={note.id}>
                    <Card.Content>
                                <h3>{note.title}</h3>
                                </Card.Content>
                            <Link className="nav-link" to={`/bootstrap/${note.id}`}>Details</Link> <br/>
                        <Button basic color='orange' onClick={()=> {this.props.deleteBootstrap(note.id)}} >DELETE</Button>

                        <Button basic color='teal'  type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push(`/bootstrap/${note.id}/edit`);
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

export default BootstrapList;

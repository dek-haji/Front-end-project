import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import "./React.css"
class ReactList extends Component {
    handleClick = (event)=> {
        console.log("its working", this.props.react.id)
        console.log(event)
        this.props.deleteReact(this.props.react.id)
    }
    render() {
        return (
            <div className = "uunsi">

                    <h1>React notes</h1>
            <section className="react-notes">
                {
                    this.props.react.map(note=>
                        <Card key={note.id}>
                        <Card.Content>
                        <i className="right floated like icon"></i>
                                <h3>{note.title}</h3>
                                </Card.Content>
                            <Link className="nav-link" to={`/react/${note.id}`}>Details</Link> <br/>
                        <Button basic color='orange' onClick={()=> {this.props.deleteReact(note.id)}}> <i className="delete icon"></i> </Button>
                        <Button basic color='teal' type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push(`/react/${note.id}/edit`);
                        }}>
                        <i className="edit icon"></i>
                        </Button>
                    <div className="ui star rating" data-rating="3"></div>
                        </Card>
                )
                    }
                    </section>
                </div>
        );
    }
}

export default ReactList;


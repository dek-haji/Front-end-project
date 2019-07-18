import React, { Component, useDebugValue } from 'react';
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button, } from 'semantic-ui-react'
import "./React.css"
class ReactList extends Component {

    state = {
        saveDisabled: false,
        isDisabled: false,
        currentUser: sessionStorage.getItem('userId'),
    }

    userCard = (note) => {
        
        if (note.userId === parseInt(this.state.currentUser)) {
            return true
        } else {
            return  false
        }
    }

    handleClick = (event)=> {
        console.log("its working", this.props.react.id)
        console.log(event)
        this.props.deleteReact(this.props.react.id)
    }
    render()
    {
        return (
            <>
                    <h1>React notes</h1>
            <section className="react-notes">
                {
                    this.props.react.map(note=>
                        <Card key={note.id}>
                        <Card.Content>
                        <i className="right floated like icon"></i>
                                <h4>{note.title}</h4>
                                </Card.Content>
                            <Link className="nav-link" to={`/react/${note.id}`}>Details</Link> <br />
                            {this.userCard(note) ?
                                <>
                                    <Link  basic color='black' onClick={() => { this.props.deleteReact(note.id) }}> <i className="trash alternate icon"></i> </Link>

                                    <Button basic color='teal' type="button"
                                        className="btn btn-info"
                                        onClick={() => {
                                            this.props.history.push(`/react/${note.id}/edit`);
                                        }}>
                                        <i className="edit icon"></i>
                                    </Button>
                                </>
                                : null}
                    <div className="ui star rating" data-rating="3"></div>
                        </Card>
                )
                    }
                    </section>
                </>
        );
    }
}

export default ReactList;


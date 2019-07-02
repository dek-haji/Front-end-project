import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from 'semantic-ui-react'

import "./Js.css"

class JsList extends Component {
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
        console.log("its working", this.props.notes.id)
        this.setState(
            { saveDisabled: true },
            this.props.deletejs(this.props.notes.id)
        )
    }

    render() {
        // console.log('this is the props in notes List',this.props)
        console.log("current",this.state.currentUser)
       
        return (
            <>
                    <h1>JS notes</h1>
            <section className="Js-notes">
                {
                    this.props.javascript.map(note=>
                    <Card key={note.id} >
                    <Card.Content>
                            <h4>{note.title}</h4>
                            </Card.Content>
                            <Link className="nav-link" to={`/javascript/${note.id}`}>Details</Link> <br />
                            {this.userCard(note) ?
                    <>
                                    <Link  basic color='black' onClick={() => { this.props.deletejs(note.id) }}>  <i className="trash alternate icon"></i> </Link>

                                <Link basic color='teal' type="button"
                                    className="btn btn-info"
                                    onClick={() => {
                                        this.props.history.push(`/javascript/${note.id}/edit`);
                                    }}>
                                    Edit
                        </Link>
                                </>
                                : null }
                                <div className="ui star rating" data-rating="3"></div>
                </Card>
                )
           }
                </section>
                </>
        );
    }
}

export default JsList;

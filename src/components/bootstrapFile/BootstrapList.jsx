import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from 'semantic-ui-react'

 import "./Bootstrap.css"

class BootstrapList extends Component {

    state = {
        saveDisabled: false,
        isDisabled: false,
        currentUser: sessionStorage.getItem('userId'),
    }
    handleClick = (event)=> {
        console.log("its working", this.props.bootstrap.id)
        console.log(event)
        this.props.deleteForm(this.props.bootstrap.id)
    }

    userCard = (note) => {
   
        if (note.userId === parseInt(this.state.currentUser)) {
            return true
        } else {
            return  false
        }
    }

    render() {
        // console.log('this is the props in notes List',this.props)
        return (
            <>
                    <h1>Bootstrap notes</h1>
            <section className="boots">
                {
                    this.props.bootstrap.map(note=>
                    <Card key={note.id}>
                    <Card.Content>
                                <h4>{note.title}</h4>
                                </Card.Content>
                            <Link className="nav-link" to={`/bootstrap/${note.id}`}>Details</Link> <br/>
                            {this.userCard(note) ?
                    <>
                        <Button basic color='orange' onClick={()=> {this.props.deleteBootstrap(note.id)}} >DELETE</Button>

                        <Button basic color='teal'  type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push(`/bootstrap/${note.id}/edit`);
                        }}>
                        Edit
                        </Button>
                        </>
                                : null }
                </Card>
                )
           }
                </section>
                </>
        );
    }
}

export default BootstrapList;

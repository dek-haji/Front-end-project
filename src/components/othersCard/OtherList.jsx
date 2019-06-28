import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from 'semantic-ui-react'
class OtherList extends Component {
    state = {
        saveDisabled: false,
        isDisabled: false,
        currentUser: sessionStorage.getItem('userId'),
    }


    handleClick = (event)=> {
        console.log("its working", this.props.react.id)
        console.log(event)
        this.props.deleteReact(this.props.react.id)
    }
    
    userCard = (note) => {
   
        if (note.userId === parseInt(this.state.currentUser)) {
            return true
        } else {
            return  false
        }
    }

    render()
    {
        return (
            <>
                    <h1>Other notes</h1>
            <section className="react-notes">
                {
                    this.props.others.map(note=>
                        <Card key={note.id}>
                        <Card.Content>
                        <i className="right floated like icon"></i>
                                <h3>{note.title}</h3>
                                </Card.Content>
                            <Link className="nav-link" to={`/others/${note.id}`}>Details</Link> <br />
                            {this.userCard(note) ?
                    <>
                            <Button basic color='orange' onClick={()=> {this.props.deleteOthers(note.id)}}> <i className="delete icon"></i> </Button>  

                        <Button basic color='teal' type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push(`/others/${note.id}/edit`);
                        }}>
                        <i className="edit icon"></i>
                                    </Button>
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

export default OtherList;


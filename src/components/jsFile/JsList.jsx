import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Embed } from 'semantic-ui-react'
import "./Js.css"

class JsList extends Component {
    handleClick = (event)=> {
        console.log("its working", this.props.notes.id)
        console.log(event)
        this.props.deleteForm(this.props.notes.id)
    }
    render() {
        console.log('this is the props in notes List',this.props)
        return (
            <>
            <section className="notes">
                    <h1>notes</h1>
                {
                    this.props.notes.map(note=>
                    <div key={note.id}>
                            {/* <Embed id='3M_5oYU-IsU' placeholder='empty' source='youtube' /> */}
                            <h5>{note.title}</h5>
                            <Embed id = {note.URL} placeholder='empty' source='youtube' />
                            <p>{note.snippet}</p>
                            <p>{note.note}</p>
                            <Link className="nav-link" to={`/notes/${note.id}`}>Details</Link> <br/>
                        <button onClick={()=> {this.props.deleteForm(note.id)}} >DELETE</button>

                        <button type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push(`/notes/${note.id}/edit`);
                        }}>
                        Edit
                        </button>
                </div>
                )
           }
                </section>
                </>
        );
    }
}

export default JsList;

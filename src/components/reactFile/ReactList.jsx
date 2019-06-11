import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import "./Js.css"

class ReactList extends Component {
    handleClick = (event)=> {
        console.log("its working", this.props.notes.id)
        console.log(event)
        this.props.deleteForm(this.props.notes.id)
    }
    render() {
        // console.log('this is the props in notes List',this.props)
        return (
            <>
            <section className="notes">
                    <h1>React notes</h1>
                {
                    this.props.react.map(note=>
                    <div key={note.id}>
                            <h3>{note.title}</h3>
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

export default ReactList;

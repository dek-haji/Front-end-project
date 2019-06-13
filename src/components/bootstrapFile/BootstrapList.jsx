import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import "./Js.css"

class BootstrapList extends Component {
    handleClick = (event)=> {
        console.log("its working", this.props.boo.id)
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
                    <div key={note.id}>
                            <h3>{note.title}</h3>
                            <Link className="nav-link" to={`/bootstrap/${note.id}`}>Details</Link> <br/>
                        <button onClick={()=> {this.props.deleteForm(note.id)}} >DELETE</button>

                        <button type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push(`/bootstrap/${note.id}/edit`);
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

export default BootstrapList;

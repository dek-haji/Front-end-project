import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class SearchResults extends Component {
  render() {
    return (
        <section className="searchResults">
        <h1>Search Results</h1>
            {this.props.searchResults.map(result =>
            <Card key={result.id}>
            <Card.Content>
                    <h3>{result.title}</h3>
                    </Card.Content>
                <Link className="nav-link" to={`/react/${result.id}`}>Details</Link> <br/>
            {/* <Button basic color='orange' onClick={()=> {this.props.deleteReact(result.id)}} >DELETE</Button>
        
            <Button basic color='teal' type="button"
            className="btn btn-info"
            onClick={() => {
                this.props.history.push(`/react/${result.id}/edit`);
            }}>
            Edit
            </Button> */}
        </Card>
        )
        }
        </section>
    );
  }
}


export default SearchResults;
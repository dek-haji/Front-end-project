import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import Highlight from 'react-highlight'
import "./Search.css"

class SearchResults extends Component {
  render() {
    return (
      <>
        <h1>Search Results</h1>
      <section className="searchResults">
            {this.props.searchResults.map(result =>
            <Card key={result.id}>
            <Card.Content>
                  <h4>{result.title}</h4>
                  <Highlight language={"jsx"} className="react-snippet">{result.snippet}</Highlight>

                </Card.Content>
                {this.props.noteTypes.filter(note => {
                  if (note.id === result.noteTypeId) {
                    return true
                  } else {
                    return false
                  }
                }).map(noteType =>
                  <Link className="nav-link" key={result.id} to={`/${noteType.name}/${result.id}`}>Details</Link>
                )}
        </Card>
        )
        }

        </section>
        </>
    );
  }
}


export default SearchResults;
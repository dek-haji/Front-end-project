import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import dbCalls from "./modules/dbCalls"


import "bootstrap/dist/css/bootstrap.min.css"


class App extends Component {
    state = {
        searchResults: []
      };
      getSearchResults = input => {
        console.log("GETSEARCH INPUT:", input);
        dbCalls.search(input).then(results => {
          this.setState({ searchResults: results });
          console.log("SEARCH RESULTS", results);
        });
      };
    render() {
        return (
            <React.Fragment>
                <NavBar
                    getSearchResults={this.getSearchResults}
                    searchResults={this.state.searchResults}
                        />
                <ApplicationViews searchResults={this.state.searchResults}/
                >
            </React.Fragment>
        )
    }
}

export default App
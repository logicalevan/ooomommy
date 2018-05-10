import React, { Component } from 'react';

// Components
import API from '../utils/API';
import Article from './Article';

class Search extends Component {
    // Set state with articles coming from the user's search
    state = {
        query: "",
        articles: []
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }

    handleSearch = event => {
        event.preventDefault();
        console.log(this.state.query)
        API.searchArticle(this.state.query)
            .then(response => { this.setState({ articles: response.data }); console.log(this.state.articles);})
            .catch(err => console.log(err))
    }

    render() {
        let searchResults = this.state.articles.map((item, i) => {
            return (
                <Article 
                    key={i}
                    title={item.headline.main}
                    abstract={item.snippet}
                    url={item.web_url}
                    type="save"
                /> 
            )
        })

        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <input 
                            onChange={this.handleChange}
                            className="form-control" 
                            type="search" 
                            placeholder="Search" 
                            ria-label="Search" /> 
                    </div>
                    <button 
                        type="submit" 
                        onClick={this.handleSearch} 
                        className="btn btn-outline-dark">Search</button>
                </form>
                <hr />
                <ul>
                    {searchResults}
                </ul>
                <ul>
                    {this.state.articles.length > 0
                        ? 
                            this.state.articles.map((item, i) => <li key={i}>{item.title}</li>)
                        :
                            <h3 className="text-center">No results to display yet</h3>
                    }
                </ul>
            </div>
        );
    }
}

export default Search;

import React, { Component } from 'react';

import API from '../utils/API';


class SearchBar extends Component {
     

    render() {
        return (
            <li className="SearchBar">
                <form>
                    <input type="radio" name="gender" value="male" checked/> Male
                    <input type="radio" name="gender" value="female"/> Female
                    <input type="radio" name="gender" value="other"/> Other
                    <button 
                        type="submit" 
                        onClick={this.handleSearch} 
                        className="btn btn-outline-dark">Search</button>
                </form>
            </li>
        );
    }
}

export default SearchBar;
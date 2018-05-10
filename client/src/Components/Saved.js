import React, { Component } from 'react';
import Article from './Article';
import SearchBar from './searchBar';
import API from '../utils/API';

class Saved extends Component {
    state = { 
        donors: [],
        query: "",
     };
    componentDidMount() {
        console.log('mounted');
        API.getSavedArticles()
            .then(response => {
                console.log(response)
                this.setState({ donors: response.data })})
            .catch(err => console.log(err));
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }

    handleSearch = event => {
        event.preventDefault();
        console.log(this.state.query)
        API.searchArticle(this.state.query)
            .then(response => { this.setState({ donors: response.data }); console.log(this.state.articles);})
            .catch(err => console.log(err))
    }

 
    render() {
        let singleArticle = this.state.donors.map((item) => {
            return (
                <Article
                        height={item.height}
                        weight={item.weight}
                        ethnicity={item.ethnicity}
                        gender={item.gender}
                        eyeColor={item.eyeColor}
                        profession={item.profession}
                        hairColor={item.hairColor}
                        birthYear={item.birthYear}
                        responseOne={item.responseOne}
                        responseTwo={item.responseTwo}
                        responseThree={item.responseThree}
                        advanced={item.advanced}
                        id={item._id}
                        key={item._id}
                        photo={item.photo}
                        link={item.link}
                        

                    />
            )
        })

        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        What are you looking for?<br/>
                        <input
                            className='selection'
                            onChange={this.handleChange}
                            type='radio'
                            name= 'donor' 
                            value= 'all' /> All <br/>

                        <input
                            className='selection'
                            onChange={this.handleChange}
                            type='radio'
                            name= 'donor' 
                            value= 'sperm'/> Sperm <br/>

                        <input
                            className='selection'
                            onChange={this.handleChange}
                            type='radio'
                            name= 'donor' 
                            value= 'egg'/> Egg <br/>

                        <input
                            className='selection'
                            onChange={this.handleChange}
                            type='radio'
                            name= 'donor' 
                            value= 'surrogate'/> Surrogate <br/>
                    </div>
                    <button 
                        type="submit" 
                        onClick={this.handleSearch} 
                        className="btn btn-outline-dark">Search</button>
                </form>
                <hr />
                <ul>
                    {singleArticle}
                </ul>
              
            </div>
        );

    }
}

export default Saved;
import React, { Component } from 'react';
// import photo from '../Assets/bobby/bobby-baby.jpg';
import API from '../utils/API';
import './Article.css';

class Article extends Component {
     state = {
        height: this.props.height,
        weight: this.props.weight,
        ethnicity: this.props.ethnicity,
        gender: this.props.gender,
        eyeColor: this.props.eyeColor,
        profession: this.props.profession,
        hairColor: this.props.hairColor,
        birthYear: this.props.birthYear,
        responseOne: this.props.responseOne,
        responseTwo: this.props.responseTwo,
        responseThree: this.props.responseThree,
        advanced: this.props.advanced,
        id: this.props.id,
        photo: this.props.photo,
        link: this.props.link
    }

    handleSave = () => {
        console.log("Saving!");
        const article = {
            url: this.state.url,
            title: this.state.title,
            abstract: this.state.abstract
        }
        API.saveArticle(article);
    }

  

  

    render() {
        return (
            <a href={this.state.link} className="project">
            <span className="test">
            <span className="testing">
                <h3>{this.state.id}</h3>
                <ul>
                <img className="pic" src={this.state.photo}/>
                <li>Ethnicity: {this.state.ethnicity}
                </li><li>Hair Color: {this.state.hairColor}
                </li><li>Eye Color: {this.state.eyeColor}
                </li></ul>
            </span>
            <span className="btn-see-project">
                View Donor Profile
            </span>
            </span>
   
            </a>
        );
    }
}

export default Article;


import React, { Component } from 'react';
import Article from './Article';
import API from '../utils/API';
class Latest extends Component {
    state = { articles: [] };
    componentDidMount() {
        API.getLatestNews()
            .then(response => this.setState({ articles: response.data }))
            .catch(err => console.log(err));
    }
    render() {
        let articles = this.state.articles.map((item, i) => {
            return (
                <Article 
                    key={i}
                    title={item.title}
                    abstract={item.abstract}
                    url={item.url}
                    type="save"
                />
            )
        })

        return (
            <section>
                <h1>Latest</h1>
                <ul>
                    {articles}
                </ul>
            </section>
        );
    }
}

export default Latest;
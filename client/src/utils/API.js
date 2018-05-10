import axios from 'axios';

export default {
    getLatestNews: () => {
        return axios.get('/latest')
    },
    saveArticle: article => {
        return axios.post('/save', article)
    },
    getSavedArticles: () => {
        return axios.get('/save')
    },
    removeArticle: id => {
        return axios.delete(`/delete/${id}`)
    },
    searchArticle: query => {
        return axios.get(`/search/${query}`)
    }
}
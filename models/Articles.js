const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    height: { type: String },
    weight: { type: Number },
    ethnicity: { type: String },
    gender: { type: String },
    eyeColor: { type: String },
    profession: { type: String },
    hairColor: { type: String },
    birthYear: {type: String },
    responseOne: { type: String },
    responseTwo: { type: String },
    responseThree: { type: String },
    advanced: { type: Array },
    photo: { type: String },
    link: { type: String }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
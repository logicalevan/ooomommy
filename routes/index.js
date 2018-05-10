const path = require('path');
const express = require('express')
const router = express.Router();
const axios = require('axios');
const Articles = require('../models/Articles');



router.post('/save', (req, res) => {
    Articles.create(req.body)
        .then(response => res.send(response))
        .catch(err => res.status(422).json(err))
});

router.get('/save', (req, res) => {
    console.log('routing...');
    Articles.find({})
        .then(response => res.send(response))
        // .catch(err => res.status(422).json(err))/
        .catch(err => console.log(err));
})

router.delete('/delete/:id', (req, res) => {
    Articles.findById({ _id: req.params.id })
        .then(response => response.remove())
        .then(response => res.send(response))
        .catch(err => res.status(422).json(err))
})

router.get('/search/:q', (req, res) => {
    if (req.params.q==="all"){
        Articles.find({})
        .then(response => res.send(response))
        .catch(err => res.status(422).json(err))
    }
    else if (req.params.q==='sperm'){
        Articles.find({gender: "Male"})
        .then(response => res.send(response))
        .catch(err => res.status(422).json(err))
    }
    else if (req.params.q==='egg'){
        Articles.find({donation: "Egg"})
        .then(response => res.send(response))
        .catch(err => res.status(422).json(err))
    }
    else if (req.params.q==='surrogate'){
        Articles.find({donation: "Surrogate"})
        .then(response => res.send(response))
        .catch(err => res.status(422).json(err))
    }
});

module.exports = router;


const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const qoutes = require('find-quote');

router.get('/quotes/:quote', (req,res) => {
    let quoteFound = qoutes.getQuote(req.params.quote);
    let isFound = quoteFound === "" ? 'No quotes were found with the word ' + req.params.quote : quoteFound
    
    res.send(
      isFound
    );
});
router.get('/get/:firstname',(req,res) => {
    let user = { 
        first_name: req.params.username,
        
    };
    fetch('https://reqres.in/api/users', {
            method: 'POST', 
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },

    })
    .then(res => res.json())
    .then(json => res.send(json.json));
})




router.post('/add/:firstname',(req,res) => {
    let user = { 
        firstname: req.params.firstname,
        
    };
    fetch('https://reqres.in/api/users', {
            method: 'POST', 
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },

    })
    .then(res => res.json())
    .then(json => res.send(json.json));
})
module.exports = router;
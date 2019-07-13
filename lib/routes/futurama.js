const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuotes');

const profiles = [];

module.exports = Router()
  .post('/api/v1/profiles', futuramaQuote, (req, res) => {
    const {
      name,
      favoriteCharacter
    } = req.body;

    const profile = {
      name, 
      favoriteCharacter,
      tagline: req.quote.quote
    };
    profiles.push(profile);
    res.send(profile);
  });


const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuotes');

const profiles = [];

module.exports = Router()
  .post('/', futuramaQuote, (req, res) => {
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
  })

  .get('/', (req, res) => {
    res.send(profiles);
  })

  .get('/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })

  .patch('/:id', futuramaQuote, (req, res) => {
    const {
      favoriteCharacter
    } = req.body;

    const updatedProfile = {
      favoriteCharacter,
      tagline: req.quote.quote
    };

    profiles[req.params.id].favoriteCharacter = updatedProfile.favoriteCharacter;
    profiles[req.params.id].tagline = updatedProfile.tagline;
    res.send(profiles[req.params.id]);
  })
  
  .delete('/:id', (req, res) => {
    const deletedProfile = profiles.splice(req.params.id, 1);
    res.send(deletedProfile[0]);
  });


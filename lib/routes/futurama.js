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
  })

  .get('/api/v1/profiles', (req, res) => {
    res.send(profiles);
  })

  .get('/api/v1/profiles/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })

  .patch('/api/v1/profiles/:id', futuramaQuote, (req, res) => {
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
  
  .delete('/api/v1/profiles/:id', (req, res) => {
    const deletedProfile = profiles.splice(req.params.id, 1);
    res.send(deletedProfile[0]);
  });


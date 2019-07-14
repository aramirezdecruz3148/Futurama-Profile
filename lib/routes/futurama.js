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
    const profilesId = profiles[req.params.id];
    res.send(profilesId);
  })

  .patch('/:id', futuramaQuote, (req, res) => {
    const profilesId = profiles[req.params.id];
    
    const {
      favoriteCharacter
    } = req.body;

    const updatedProfile = {
      favoriteCharacter,
      tagline: req.quote.quote
    };

    profilesId.favoriteCharacter = updatedProfile.favoriteCharacter;
    profilesId.tagline = updatedProfile.tagline;
    res.send(profilesId);
  })
  
  .delete('/:id', (req, res) => {
    const deletedProfile = profiles.splice(req.params.id, 1);
    res.send(deletedProfile[0]);
  });


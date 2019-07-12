const { Router } = require('express');

const profiles = [];

module.exports = Router()
  .post('/api/v1/profiles', (req, res) => {
    const {
      name,
      favoriteCharacter
    } = req.body;

    const profile = {
      name, 
      favoriteCharacter
    };
    profiles.push(profile);
    res.send(profile);
  });

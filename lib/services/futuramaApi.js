const request = require('superagent');

const getRandomQuote = (count, character) => {
  return request
    .get(`futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);
};

module.exports = {
  getRandomQuote
};

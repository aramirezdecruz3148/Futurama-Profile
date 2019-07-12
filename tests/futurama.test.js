const request = require('supertest');
const app = require('../lib/app');

describe('futurama routes', () => {
  it('POST can return a profile', () => {
    return request(app)
      .post('/api/v1/profiles')
      .send({ name: 'Alex', favoriteCharacter: 'Bender' })
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'Alex',
          favoriteCharacter: 'Bender'
        });
      });
  });
});


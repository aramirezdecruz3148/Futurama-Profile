const request = require('supertest');
const app = require('../lib/app');

describe('futurama routes', () => {
  it('POST can return a profile with name and favoriteCharacter', () => {
    return request(app)
      .post('/api/v1/profiles')
      .send({ name: 'Alex', favoriteCharacter: 'Bender' })
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'Alex',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  });

  it('GET can return all profiles', () => {
    return request(app)
      .get('/api/v1/profiles')
      .then(res => {
        expect(res.body).toEqual([{ 
          name: 'Alex',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String) 
        }]);
      });
  });
});

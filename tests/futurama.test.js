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

  it('GET can get an item by index', () => {
    return request(app)
      .get('/api/v1/profiles/0')
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'Alex',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String) 
        });
      });
  });

  it('PATCH can update favorite character', () => {
    return request(app)
      .patch('/api/v1/profiles/0')
      .send({ favoriteCharacter: 'Fry' })
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'Alex',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String) 
        });
      });
  });

  it('can delete an item by index', () => {
    return request(app)
      .delete('/api/v1/profiles/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Alex',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String)
        });
      });
  });
});

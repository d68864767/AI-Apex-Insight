const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../server');

describe('API Tests', () => {
  it('should return a successful response', (done) => {
    request(app)
      .get('/api/data')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', (done) => {
    request(app)
      .get('/api/data')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.be.an('array');
        done();
      });
  });

  it('should return a 404 error for invalid route', (done) => {
    request(app)
      .get('/api/invalid')
      .expect(404, done);
  });
});

const request = require('request');
const { describe, it } = require('mocha');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865/';

const makeRequest = (url, callback) => {
  request.get(url, (err, res, body) => {
    callback(err, res, body);
  });
};

describe('Index page', () => {
  const indexOptions = {
    url: baseUrl,
    method: 'GET',
  };

  it('checks correct status code', (done) => {
    request(indexOptions, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('checks correct content', (done) => {
    request(indexOptions, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const cartOptions = (id) => ({
    url: `${baseUrl}cart/${id}`,
    method: 'GET',
  });

  it('checks correct status code for correct url', (done) => {
    makeRequest(cartOptions('12'), (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('checks correct content for correct url', (done) => {
    makeRequest(cartOptions('12'), (err, res, body) => {
      expect(body).to.contain('Payment methods for cart 12');
      done();
    });
  });

  it('checks correct status code for incorrect url', (done) => {
    makeRequest(cartOptions('kim'), (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

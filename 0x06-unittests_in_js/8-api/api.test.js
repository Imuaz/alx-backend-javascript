const request = require('request');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Index page', () => {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET',
  };

  const makeRequest = async () => {
    return new Promise((resolve) => {
      request(options, (err, res, body) => {
        resolve({ err, res, body });
      });
    });
  };

  it('checks correct status code', async () => {
    const { res } = await makeRequest();
    expect(res.statusCode).to.equal(200);
  });

  it('checks correct content', async () => {
    const { body } = await makeRequest();
    expect(body).to.contain('Welcome to the payment system');
  });

  it('checks correct content length', async () => {
    const { res } = await makeRequest();
    expect(res.headers['content-length']).to.equal('29');
  });
});

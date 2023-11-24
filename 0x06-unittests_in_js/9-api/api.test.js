const request = require('request');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart/';

  const makeRequest = async (id) => {
    const url = `${baseUrl}${id}`;
    return new Promise((resolve) => {
      request(url, (err, res, body) => {
        resolve({ err, res, body });
      });
    });
  };

  it('checks correct status code when :id is a number', async () => {
    const { res } = await makeRequest(123);
    expect(res.statusCode).to.equal(200);
  });

  it('checks correct content when :id is a number', async () => {
    const { body } = await makeRequest(123);
    expect(body).to.contain('Payment methods for cart 123');
  });

  it('checks correct status code when :id is NOT a number (404)', async () => {
    const { res } = await makeRequest('invalid');
    expect(res.statusCode).to.equal(404);
  });

  it('checks correct content when :id is NOT a number (404)', async () => {
    const { body } = await makeRequest('invalid');
    expect(body).to.contain('Not Found');
  });
});

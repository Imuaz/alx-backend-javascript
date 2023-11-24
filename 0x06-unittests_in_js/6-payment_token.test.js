const { describe, it } = require('mocha');
const { expect } = require('chai').use(require('chai-as-promised'));
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('Async testing with async/await', async () => {
    const data = await getPaymentTokenFromAPI(true);
    expect(data).to.have.property('data');
  });
});

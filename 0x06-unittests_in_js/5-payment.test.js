const { describe, it, beforeEach, afterEach } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach('Set up spy to use for each test', () => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach('Restore spy after each test', () => {
    console.log.restore();
  });

  it('checks that console.log is called with the right argument', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.withArgs('The total is: 120').calledOnce).to.be.true;
  });

  it('checks that console.log is called with the right argument', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});

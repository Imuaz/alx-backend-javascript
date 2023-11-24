const sinon = require("sinon");
const {describe, it} = require("mocha");
const { assert } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('checks that Utils.calculateNumber is stubbed', () => {
    const spyConsoleLog = sinon.spy(console, 'log');
    const stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    assert.isTrue(spyConsoleLog.withArgs('The total is: 10').calledOnce);
    assert.isTrue(stubCalculateNumber.withArgs('SUM', 100, 20).calledOnce);

    spyConsoleLog.restore();
    stubCalculateNumber.restore();
  });
});

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber to return 10', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(stub.calledOnceWith('SUM', totalAmount, totalShipping)).to.be.true;
    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;

    consoleSpy.restore();
    stub.restore();
  });
});

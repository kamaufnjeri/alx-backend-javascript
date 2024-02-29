const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(calculateNumberSpy.calledOnceWith('SUM', totalAmount, totalShipping)).to.be.true;

    calculateNumberSpy.restore();
  });

  it('should log the correct total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const totalAmount = 100;
    const totalShipping = 20;
    const expectedSum = totalAmount + totalShipping;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(consoleSpy.calledOnceWith(`The total is: ${expectedSum}`)).to.be.true;

    consoleSpy.restore();
  });
});

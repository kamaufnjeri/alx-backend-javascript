const calculateNumber = require('./1-calcul');
const { expect } = require('chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('Should correctly sum two numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('Should correctly subtract two numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE operation', () => {
    it('Should correctly divide two numbers when b is not 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('Should return "Error" when trying to divide by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid operation', () => {
    it('Should throw an error for invalid operation type', () => {
      expect(() => {
        calculateNumber('INVALID', 1.4, 4.5);
      }).to.throw('Invalid type. Type must be SUM, SUBTRACT, or DIVIDE');
    });
  });
});

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should correctly sum two positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

    it('should correctly sum two positive numbers (alternate)', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });

    it('should correctly sum two negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('should correctly sum two negative numbers (alternate)', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });

    it('should correctly sum a negative and a positive number', () => {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
    });

    it('should correctly sum a positive and a negative number', () => {
      expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    });

    it('should correctly sum zero and zero', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should correctly subtract two positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

    it('should correctly subtract two positive numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    });

    it('should correctly subtract two negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('should correctly subtract two negative numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });

    it('should correctly subtract a negative number from a positive number', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });

    it('should correctly subtract a positive number from a negative number', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('should correctly subtract zero from zero', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should correctly divide two positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('should correctly divide two numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('should correctly divide two numbers with different signs (alternate)', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('should correctly divide two negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('should correctly divide two equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('should correctly divide two equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('should correctly divide two numbers rounded up to the nearest integer', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('should correctly divide two numbers rounded down to the nearest integer', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('should correctly divide zero by a positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('should correctly divide zero by a negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('should return "Error" when dividing a positive number by zero', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing a positive number by a number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing a positive number by a number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing a negative number by zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing a negative number by a number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing a negative number by a number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing zero by zero', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});

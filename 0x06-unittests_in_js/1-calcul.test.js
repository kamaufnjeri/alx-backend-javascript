const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('Should correctly sum two numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('Should correctly subtract two numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE operation', () => {
    it('Should correctly divide two numbers when b is not 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('Should return "Error" when trying to divide by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid operation', () => {
    it('Should throw an error for invalid operation type', () => {
      assert.throws(() => {
        calculateNumber('INVALID', 1.4, 4.5);
      }, /^Error: Invalid type. Type must be SUM, SUBTRACT, or DIVIDE\.$/);
    });
  });
});

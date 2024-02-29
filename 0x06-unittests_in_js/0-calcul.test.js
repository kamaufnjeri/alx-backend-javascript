const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test Suite for calculateNumber function', () => {
  it('Should correctly sum floating point whole numbers: 3.0 + 5.0', () => {
    assert.strictEqual(calculateNumber(3.0, 5.0), 8);
  });

  it('Should round down b\'s floating point fractional number and sum: 3.0 + 5.7', () => {
    assert.strictEqual(calculateNumber(3.0, 5.7), 9);
  });

  it('Should round down a and b\'s floating point fractional numbers and sum: 3.4 + 5.7', () => {
    assert.strictEqual(calculateNumber(3.4, 5.7), 9);
  });

  it('Should round down a\'s floating point fractional number and sum: 3.4 + 5.0', () => {
    assert.strictEqual(calculateNumber(3.4, 5.0), 8);
  });

  it('Should round up b\'s floating point fractional numbers and sum: 3.0 + 5.9', () => {
    assert.strictEqual(calculateNumber(3.0, 5.9), 9);
  });

  it('Should round up a and b\'s floating point fractional numbers and sum: 6.2 + 5.9', () => {
    assert.strictEqual(calculateNumber(6.2, 5.9), 12);
  });

  it('Should round up a\'s floating point fractional numbers and sum: 6.2 + 5.0', () => {
    assert.strictEqual(calculateNumber(6.2, 5.0), 11);
  });

  it('Should round down a and b floating point fractional numbers with trailing 9\'s and sum: 4.4999 + 6.499999', () => {
    assert.strictEqual(calculateNumber(4.4999, 6.499999), 11);
  });
});

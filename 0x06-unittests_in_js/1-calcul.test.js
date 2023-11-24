const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should round numbers and return the correct sum', () => {
    const res = calculateNumber('SUM', 1.4, 4.5)
    assert.strictEqual(res, 6);
  });

  it('should round numbers and return the correct difference', () => {
    const res = calculateNumber('SUBTRACT', 1.4, 4.5)
    assert.strictEqual(res, -4);
  });

  it('should round numbers and return the correct quotient', () => {
    const res = calculateNumber('DIVIDE', 1.4, 4.5)
    assert.strictEqual(res, 0.2);
  });

  it('should round numbers and return the correct error', () => {
    const res = calculateNumber('DIVIDE', 1.4, 0)
    assert.strictEqual(res, 'Error');
  });
});

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

// Test cases for the calculateNumber function
describe('calculateNumber', () => {
  it('should return the correct sum for positive decimal numbers', () => {
    const result = calculateNumber(3.14, 7.89);
    assert.strictEqual(result, 11);
  });

  it('should return the correct sum for negative decimal numbers', () => {
    const result = calculateNumber(-5.6, -2.3);
    assert.strictEqual(result, -8);
  });

  it('should return the correct sum for a mix of positive and negative numbers', () => {
    const result = calculateNumber(8.7, -3.2);
    assert.strictEqual(result, 6);
  });

  it('should return the correct sum for zero values', () => {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });

  it('should return the correct sum for integer values', () => {
    const result = calculateNumber(10, 5);
    assert.strictEqual(result, 15);
  });

  // Add more test cases as needed
});

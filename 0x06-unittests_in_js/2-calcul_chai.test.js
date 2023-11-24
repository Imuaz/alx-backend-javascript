const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  it('should round numbers and return the correct sum', () => {
    const res = calculateNumber('SUM', 1.4, 4.5);
    expect(res).to.equal(6);
  });

  it('should round numbers and return the correct difference', () => {
    const res = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(res).to.equal(-4);
  });

  it('should round numbers and return the correct quotient', () => {
    const res = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(res).to.equal(0.2);
  });

  it('should round numbers and return the correct error', () => {
    const res = calculateNumber('DIVIDE', 1.4, 0);
    expect(res).to.equal('Error');
  });
});

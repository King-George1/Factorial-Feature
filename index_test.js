var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
  it('test if the output of 5! is equal to 120', () => {
    const inputNum = 5;
    const expectedResult = 120;
    const result = Calculate.factorial(inputNum);
    assert.equal(result, expectedResult);
  });

  it('test if the output of 4! is equal to 24', () => {
    const inputNum = 4;
    const expectedResult = 24;
    const result = Calculate.factorial(inputNum);
    assert.equal(result, expectedResult);
  });

  it('returns 1 when you pass in 0.', () => {
    const inputNum = 0;
    const expectedResult = 1;
    const result = Calculate.factorial(inputNum);
    assert.equal(result, expectedResult);
  });
  });
});
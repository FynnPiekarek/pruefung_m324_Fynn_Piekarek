const assert = require('assert');
const calculate = require('./index');

describe('calculate function', function() {
  it('should return the sum of two numbers when operation is "add"', function() {
    assert.strictEqual(calculate(5, 3, 'add'), 8);
  });

  it('should return the difference of two numbers when operation is "subtract"', function() {
    assert.strictEqual(calculate(10, 5, 'subtract'), 5);
  });

  it('should throw an error for invalid operation', function() {
    assert.throws(() => calculate(5, 3, 'multiply'), /Invalid operation/);
  });
});

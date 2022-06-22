// This code does not execute properly. Try to figure out why.

function multiply(a, b){
  a * b
}

// My Solution:

const multiply = (a, b) => a * b;

// Other Solutions:

function multiply(a, b){
  if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
    return 0;
  }
  return a * b;
}

function multiply(a, b){
  if (undefined == a || undefined == b
    || isNaN(a) || isNaN(b))
    throw new Error('Both arguments should be numbers')
  return a * b
}

// Test Cases:

const assert = require("chai").assert;

describe("Multiply", () => {
  it("fixed tests", () => {
    assert.strictEqual(multiply(1,1), 1);
    assert.strictEqual(multiply(2,1), 2);
    assert.strictEqual(multiply(2,2), 4);
    assert.strictEqual(multiply(3,5), 15);
  });

  it('random tests', () => {
    for(let i=0; i<100; i++) {
      let [a,b] = [Math.random()*100|0, Math.random()*100|0];
      assert.strictEqual(multiply(a,b), a*b);
    }
 });
});

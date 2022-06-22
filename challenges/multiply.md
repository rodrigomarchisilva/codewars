<!-- markdownlint-disable MD024 -->

# Multiply

## Description

This code does not execute properly. Try to figure out why.

~~~js
function multiply(a, b){
  a * b
}
~~~

## My Solution

### JavaScript

~~~js
const multiply = (a, b) => a * b;
~~~

### Python

~~~py
def multiply(a, b):
    return a * b
~~~

## Other Solutions

### JavaScript

~~~js
function multiply(a, b){
  if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
    return 0;
  }
  return a * b;
}
~~~

~~~js
function multiply(a, b){
  if (undefined == a || undefined == b
    || isNaN(a) || isNaN(b))
    throw new Error('Both arguments should be numbers')
  return a * b
}
~~~

### Python

~~~py
def multiply(a, b):
    if isinstance(a, (int, float, complex)):
        if isinstance(b, (int, float, complex)):
            return a * b
~~~

## Test Cases

### JavaScript

~~~js
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
~~~

### Python

~~~py
import codewars_test as test 
from solution import multiply

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(multiply(1,1), 1)
        test.assert_equals(multiply(2,1), 2)
        test.assert_equals(multiply(2,2), 4)
        test.assert_equals(multiply(3,5), 15)
        test.assert_equals(multiply(1.5,2.5), 3.75)
        test.assert_equals(multiply(0,5), 0)
        test.assert_equals(multiply(0,0), 0)
~~~

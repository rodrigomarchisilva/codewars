# Convert string to camel case

## Description

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

## Examples

* `"the-stealth-warrior"` gets converted to `"theStealthWarrior"`
* `"The_Stealth_Warrior"` gets converted to `"TheStealthWarrior"`

## My Solution

~~~js
const toCamelCase = (str) => (
  str.includes('-')
    ? str.split('-').map((word, i) => (
      !i ? word : word[0].toUpperCase() + word.slice(1))
    ).join('')
    : str.split('_').map((word, i) => (
      !i ? word : word[0].toUpperCase() + word.slice(1))
    ).join('')
);
~~~

## My Solution after seeing other solutions

~~~js
const toCamelCase = (str) => str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
~~~

## Test Cases

~~~js
describe("toCamelCase", function() {
  it ("should handle empty values", function(){
    Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
  })
  
  it ("should remove underscores and convert first letter of word to upper case", function(){
    Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    Test.assertEquals(toCamelCase("The_stealth_warrior"), "TheStealthWarrior", "toCamelCase('The_stealth_warrior') did not return correct value")
  });
  
  it ("should remove hyphens and convert first letter of word to upper case", function(){
    Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    Test.assertEquals(toCamelCase("the-Stealth-Warrior"), "theStealthWarrior", "toCamelCase('the-Stealth-Warrior') did not return correct value")
    Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
    Test.assertEquals(toCamelCase("I-am-a-programmer"), "IAmAProgrammer")
    Test.assertEquals(toCamelCase("i-am-a-programmer"), "iAmAProgrammer")
  });
});
~~~

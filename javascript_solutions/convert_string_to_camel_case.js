const toCamelCase = (str) => (
  str.includes('-')
    ? str.split('-').map((word, i) => (
      !i ? word : word[0].toUpperCase() + word.slice(1))
    ).join('')
    : str.split('_').map((word, i) => (
      !i ? word : word[0].toUpperCase() + word.slice(1))
    ).join('')
);

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));

// *Function adds two numbers
function wordsCount(str) {
  return str.split(" ").lenght;
}

console.assert(wordsCount("Hello World!") === 2);
console.assert(wordsCount("Hello everyone!") === 3);
